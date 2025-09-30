import { IVehicleCardPropsResult, IVehicleCardPropsProfile, IBookingCardPropsOwner, IBookingCardPropsRenter } from "./Card.props"
import './Card.css'
import { Image } from "@atoms/Image"
import { Link } from "react-router-dom"
import { Button } from "@atoms/Button"
import { formatShortDateFr } from "@utils/DateConverter"

export const Card: React.FC<IVehicleCardPropsProfile | IVehicleCardPropsResult | IBookingCardPropsOwner | IBookingCardPropsRenter> = ({
    type,
    data
}) => {

    if (type === 'result' || type === 'my-vehicles') {
        return (
            <div className={`card ${type}-card`}>
                <Image className='card-image' src={data.picture || 'https://placehold.co/400x300'} alt={`${data.brand} ${data.model}`} />
                <div className="card-details">
                    <h2>{data.brand} {data.model}</h2>
                    {type === "result" ? (
                        <>
                            <p>Prix total : {data.totalPrice}</p>
                            <p>{data.description}</p>
                        </>
                    ) : (
                        <>
                            <p>Type : {data.category}</p>
                        </>
                    )}
                    <div className="card-actions">
                        {type === "result" ? (
                            <Link to={`result/vehicle/${data.id}`} className="btn-link">
                                <Button className="primary-button" content="Voir l'annonce" />
                            </Link>
                        ) : (
                            <Link to={`profile/vehicle/edit/${data.id}`} className="btn-link">
                                <Button className="primary-button" content="Voir l'annonce" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={`card ${type}-card`}>
                <div className="card-details">
                    <h2>{type === "owner" ? data.renterName : data.ownerName}</h2>
                    {type === 'owner' && <p><span className="primary-color-darked">Vehicule : </span>{data.vehiclePlate}</p>}
                    <p><span className="primary-color-darked">Date de début : </span> {formatShortDateFr(new Date(data.startDate))}</p>
                    <p><span className="primary-color-darked">Date de fin : </span>{formatShortDateFr(new Date(data.endDate))}</p>
                    <p><span className="primary-color-darked">{type === "owner" ? 'Loueur' : 'Propriétaire'} : </span>{type === "owner" ? data.renterName : data.ownerName}</p>
                    <p><span className="primary-color-darked">Prix total : </span>{data.amount}</p>
                    <p><span className="primary-color-darked">Status : </span>{data.status}</p>
                    <div className="card-actions">
                        <Link to={`profile/booking/${data.id}`} className="btn-link">
                            <Button className="primary-button" content="Voir le détail" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}