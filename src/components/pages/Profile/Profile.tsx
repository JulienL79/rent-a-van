import { PageMeta } from "@atoms/PageMeta";
import { Card, IBookingCardPropsOwner, IBookingCardPropsRenter, IVehicleCardPropsProfile } from "@molecules/Card";
import { IProfileData } from "./Profile.props";
import { profileDatas } from "./ProfileData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bookingDatasOwner, bookingDatasRenter } from "./ProfileBookingData";
import { vehicleDatas } from "./ProfileVehicleDate";
import './Profile.css'
import { Aside } from "@molecules/Aside";

export const Profile = () => {
    const { page } = useParams();
    const [pageMetaData, setPageMetaData] = useState<IProfileData>(profileDatas.find(meta => meta.page === (page || 'settings'))!);
    const [bookingFilter, setBookingFilter] = useState<'owner' | 'renter'>('renter');
    const [cardDatas, setCardDatas] = useState<IBookingCardPropsOwner[] | IBookingCardPropsRenter[] | IVehicleCardPropsProfile[] | null>(null)

    useEffect(() => {
        const metaData = profileDatas.find(meta => meta.page === (page));

        if (metaData) {
            setPageMetaData(metaData);
        }
    }, [page]);

    useEffect(() => {
        if (page === 'vehicles') {
            const vehicles: IVehicleCardPropsProfile[] = vehicleDatas.map(vehicle => ({
                type: 'my-vehicles',
                data: vehicle,
            }));
            setCardDatas(vehicles);
        } else if (page === 'bookings') {
            if (bookingFilter === 'owner') {
                const bookings: IBookingCardPropsOwner[] = bookingDatasOwner.map(booking => ({
                    type: bookingFilter,
                    data: booking,
                }));
                setCardDatas(bookings);
            } else {
                const bookings: IBookingCardPropsRenter[] = bookingDatasRenter.map(booking => ({
                    type: bookingFilter,
                    data: booking,
                }));
                setCardDatas(bookings);
            }
        } else {
            setCardDatas(null);
        }
    }, [page, bookingFilter]);

    return (
        <div className="page profile-page">
            <PageMeta
                title={pageMetaData.title}
                description={pageMetaData.description}
            />

            <Aside page="profile" active={pageMetaData.page} />

            <section className="content">
                <h1>{pageMetaData.titlePage}</h1>
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

                {page === 'vehicles' && (
                    !cardDatas || cardDatas.length === 0 ? (
                        <h2>Aucun véhicule trouvé</h2>
                    ) : (
                        <div className="card-list">
                            {(cardDatas as IVehicleCardPropsProfile[]).map(vehicle => (
                                <Card key={vehicle.data.id} type="my-vehicles" data={vehicle.data} />
                            ))}
                        </div>
                    )
                )}

            </section>

        </div>
    );
}