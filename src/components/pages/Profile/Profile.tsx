import { PageMeta } from "@atoms/PageMeta";
import { Card, IBookingCardPropsOwner, IBookingCardPropsRenter, IVehicleCardPropsProfile } from "@molecules/Card";
import { IProfileMetaData, IUserDetails } from "./Profile.props";
import { profileMetaDatas } from "./ProfileMetaData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Profile.css'
import { Aside } from "@molecules/Aside";
import { useAuthStore } from "@store/useAuthStore";
import { fetchVehiclesByUser } from "@api/vehicleApi";
import { fetchBookingsByOwner, fetchBookingsByRenter } from "@api/bookingApi";
import { fetchUserByIdWithDetails, updateUser, updateUserCredentials } from "@api/userApi";
import { profileCredentialsFormData, profileDetailsFormData } from "./ProfileUserFormData";
import { Form, IFormProps } from "@organisms/Form";
import { formatShortDateFr } from "@utils/DateConverter";
import { Button } from "@atoms/Button";
import { FormSubmitResult } from "../../../types/FormSubmitResult";
import { UpdateCredentialsPayload, UserUpdatePayload } from "../../../types/User";
import { useModalStore } from "@store/useModalStore";
import { motion } from "framer-motion";

export const Profile = () => {
    const { page } = useParams();
    const [pageMetaData, setPageMetaData] = useState<IProfileMetaData>(profileMetaDatas.find(meta => meta.page === (page || 'settings'))!);
    const [bookingFilter, setBookingFilter] = useState<'owner' | 'renter'>('renter');
    const [cardDatas, setCardDatas] = useState<IBookingCardPropsOwner[] | IBookingCardPropsRenter[] | IVehicleCardPropsProfile[] | null>(null)
    const [userDetails, setUserDetails] = useState<IUserDetails | null>(null);
    const [isUpdatingUserCredentials, setIsUpdatingUserCredentials] = useState(false);
    const [isUpdatingUserDetails, setIsUpdatingUserDetails] = useState(false);
    const [formDataWithUserDetails, setFormDataWithUserDetails] = useState<IFormProps>(profileDetailsFormData);
    const { user } = useAuthStore();
    const { setMessage } = useModalStore();

    // Fonction pour récupérer les véhicules de l'utilisateur
    const fetchVehicles = async () => {
        if (!user) return [];
        const vehicles = await fetchVehiclesByUser(user.id);
        console.log(vehicles);
        if (!vehicles) return [];
        return vehicles.data.map((vehicle) => ({
            id: vehicle.id,
            picture: vehicle.picture ?? null,
            brand: vehicle.brand,
            model: vehicle.model,
            category: vehicle.category,
        }));
    }

    // Fonction pour récupérer les réservations en tant que propriétaire
    const fetchOwnerBookings = async () => {
        if (!user) return [];
        const bookings = await fetchBookingsByOwner(user.id);
        console.log(bookings);
        if (!bookings) return [];
        return bookings.data.map((booking) => ({
            id: booking.id,
            vehiclePlate: booking.vehiclePlate,
            renterName: booking.renterName,
            startDate: booking.startDate,
            endDate: booking.endDate,
            amount: booking.amount,
            status: booking.status as 'pending' | 'confirmed' | 'cancelled' | 'finished',
        }));
    }

    // Fonction pour récupérer les réservations en tant que locataire
    const fetchRenterBookings = async () => {
        if (!user) return [];
        const bookings = await fetchBookingsByRenter(user.id);
        console.log(bookings);
        if (!bookings) return [];
        return bookings.data.map((booking) => ({
            id: booking.id,
            ownerName: booking.ownerName,
            startDate: booking.startDate,
            endDate: booking.endDate,
            amount: booking.amount,
            status: booking.status as 'pending' | 'confirmed' | 'cancelled' | 'finished',
        }));
    }

    // Fonction pour gérer la soumission du formulaire de mise à jour des informations utilisateur
    const handleSubmit = async (formData: { [key: string]: any }): Promise<FormSubmitResult> => {
        try {
            if (user && isUpdatingUserCredentials) {
                const payload: UpdateCredentialsPayload = {
                    email: formData.email,
                    password: formData.password,
                    confirmPassword: formData.confirmPassword,
                    oldPassword: formData.oldPassword
                }
                await updateUserCredentials(user.id, payload);
                setMessage({ type: "success", content: "Identifiants mis à jour avec succès !" });
            } else if (user && isUpdatingUserDetails) {
                const payload: UserUpdatePayload = {
                    firstname: formData.firstname,
                    lastname: formData.lastname,
                    birthdate: formData.birthdate,
                    phoneNumber: formData.phoneNumber,
                    addressStreet: formData.addressStreet,
                    addressCity: formData.addressCity,
                    addressZip: formData.addressZip,
                    addressCountry: formData.addressCountry,
                    drivingLicense: formData.drivingLicense
                }
                await updateUser(user.id, payload);
                setMessage({ type: "success", content: "Informations mises à jour avec succès !" });
            }
            setIsUpdatingUserDetails(false);
            setIsUpdatingUserCredentials(false);
            return { ok: true };
        } catch (error: any) {
            if (error.data && typeof error.data === "object") {
                return { ok: false, errors: error.data };
            }

            return { ok: false, errors: {} };
        }
    }

    // Fonction pour récupérer les détails de l'utilisateur
    const fetchUserDetails = async (): Promise<IUserDetails | null> => {
        if (!user) return null;
        const userDetails = await fetchUserByIdWithDetails(user.id);
        console.log(userDetails);
        if (!userDetails) return null;
        return {
            firstname: userDetails.data.firstname,
            lastname: userDetails.data.lastname,
            birthdate: userDetails.data.birthdate,
            email: userDetails.data.email,
            phoneNumber: userDetails.data.phoneNumber,
            addressStreet: userDetails.data.addressStreet,
            addressCity: userDetails.data.addressCity,
            addressZip: userDetails.data.addressZip,
            addressCountry: userDetails.data.addressCountry,
            profilePicture: userDetails.data.pictures[0] || null,
            drivingLicense: userDetails.data.drivingLicense,
            createdAt: userDetails.data.createdAt,
        }
    }

    // Charger les métadonnées de la page en fonction du paramètre d'URL
    useEffect(() => {
        const metaData = profileMetaDatas.find(meta => meta.page === (page));

        if (metaData) {
            setPageMetaData(metaData);
        }
    }, [page]);

    // Charger les données des véhicules ou des réservations en fonction de la page
    useEffect(() => {
        const loadData = async () => {
            if (page === 'vehicles') {
                const vehicleResponses = await fetchVehicles();
                const vehicles: IVehicleCardPropsProfile[] = vehicleResponses.map(vehicle => ({
                    type: 'my-vehicles',
                    data: vehicle,
                }));
                setCardDatas(vehicles);
            } else if (page === 'bookings') {
                if (bookingFilter === 'owner') {
                    const bookingResponses = await fetchOwnerBookings();
                    const bookings: IBookingCardPropsOwner[] = bookingResponses.map(booking => ({
                        type: bookingFilter,
                        data: booking,
                    }));
                    setCardDatas(bookings);
                } else {
                    const bookingResponses = await fetchRenterBookings();
                    const bookings: IBookingCardPropsRenter[] = bookingResponses.map(booking => ({
                        type: bookingFilter,
                        data: booking,
                    }));
                    setCardDatas(bookings);
                }
            } else {
                setCardDatas(null);
            }
        };

        loadData();

    }, [page, bookingFilter]);

    // Charger les détails de l'utilisateur à l'ouverture de la page et après une mise à jour
    useEffect(() => {
        const loadUserDetails = async () => {
            const details = await fetchUserDetails();
            if (details) {
                setUserDetails(details);
            }
        };
        if (!isUpdatingUserDetails && !isUpdatingUserCredentials) {
            loadUserDetails();
        }
        console.log(isUpdatingUserDetails);
    }, [isUpdatingUserDetails, isUpdatingUserCredentials]);

    // Mettre à jour les données du formulaire lorsque les détails de l'utilisateur changent
    useEffect(() => {
        if (!userDetails) return;
        const formDatas = isUpdatingUserCredentials ? profileCredentialsFormData : profileDetailsFormData;
        const updatedFields = formDatas.fields.map((field) => {
            const rawValue = userDetails?.[field.id as keyof IUserDetails];

            let value = "";
            if (field.type === "date" && typeof rawValue === "string") {
                value = rawValue.split("T")[0]; // extrait "1997-12-20"
            } else if (typeof rawValue === "string" || typeof rawValue === "number") {
                value = String(rawValue);
            }

            return {
                ...field,
                value,
            };
        });

        setFormDataWithUserDetails({
            ...formDatas,
            fields: updatedFields,
        });

    }, [userDetails, isUpdatingUserCredentials]);

    return (
        <div className="page profile-page">
            <PageMeta
                title={pageMetaData.title}
                description={pageMetaData.description}
            />

            <Aside page="profile" active={pageMetaData.page} />

            <section className="content">
                <h1>{pageMetaData.titlePage}</h1>
                {/* ======================================
                SECTION BOOKING  
                ========================================== */}
                {page === 'bookings' && (
                    <>
                        <nav className="card-filter">
                            <p>En tant que :</p>
                            {(['renter', 'owner'] as const).map(filter => (
                                <a
                                    key={filter}
                                    className={bookingFilter === filter ? 'active' : ''}
                                    onClick={() => setBookingFilter(filter)}
                                >
                                    {filter === 'owner' ? 'Propriétaire' : 'Locataire'}
                                </a>
                            ))}
                        </nav>

                        {(!cardDatas || cardDatas.length === 0) ? (
                            <h2>Aucune réservation trouvée</h2>
                        ) : bookingFilter === 'owner' ? (
                            <div className="card-list">
                                {(cardDatas as IBookingCardPropsOwner[]).map(booking => (
                                    <Card key={booking.data.id} type="owner" data={booking.data} />
                                ))}
                            </div>
                        ) : (
                            <div className="card-list">
                                {(cardDatas as IBookingCardPropsRenter[]).map(booking => (
                                    <Card key={booking.data.id} type="renter" data={booking.data} />
                                ))}
                            </div>
                        )}
                    </>
                )}

                {/* ======================================
                SECTION VEHICLES
                ========================================== */}

                {page === 'vehicles' && (
                    <>
                        {!cardDatas || cardDatas.length === 0 ? (
                        <h2>Aucun véhicule trouvé</h2>
                        ) : (
                        <div className="card-list">
                            {(cardDatas as IVehicleCardPropsProfile[]).map(vehicle => (
                                <Card key={vehicle.data.id} type="my-vehicles" data={vehicle.data} />
                            ))}
                        </div>
                        )}
                        <div className="button-group">
                            <Button onClick={() => {}} content='Ajouter un véhicule' />
                        </div>
                    </>
                )}

                {/* ======================================
                SECTION PROFILE DATA
                ========================================== */}

                {page === 'home' && (
                    <>
                        {userDetails?.createdAt && (<p className="extra-title">(Créé le {formatShortDateFr(userDetails.createdAt)})</p>)}
                        <motion.div
                            key={isUpdatingUserCredentials ? "credentials" : "details"}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.15, ease: "easeInOut" }}
                            style={{ overflow: "hidden" }}
                        >
                            <Form
                                isDisabled={isUpdatingUserCredentials ? false : !isUpdatingUserDetails}
                                {...formDataWithUserDetails}
                                onSubmit={handleSubmit}
                            />

                            <div className="button-group">
                                {!isUpdatingUserDetails && !isUpdatingUserCredentials && (
                                    <>
                                        <Button onClick={() => setIsUpdatingUserDetails(true)} content='Modifier mes informations' />
                                        <Button onClick={() => setIsUpdatingUserCredentials(true)} content='Modifier mes identifiants' />
                                    </>
                                )}
                                {isUpdatingUserDetails && (
                                    <>
                                        <Button onClick={() => setIsUpdatingUserDetails(false)} content='Annuler' className="danger-button" />
                                    </>
                                )}
                                {isUpdatingUserCredentials && (
                                    <>
                                        <Button onClick={() => setIsUpdatingUserCredentials(false)} content='Annuler' className="danger-button" />
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </section>

        </div>
    );
}