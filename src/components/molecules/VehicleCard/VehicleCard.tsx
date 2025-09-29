import { IVehicleCardPropsResult, IVehicleCardPropsProfile } from "./VehicleCard.props"
import { fetchPicturesByVehicle } from "@api/pictureApi"
import { useEffect, useState } from "react"
import './VehicleCard.css'
import { Image } from "@atoms/Image"

export const VehicleCard: React.FC<IVehicleCardPropsProfile | IVehicleCardPropsResult> = ({
    type,
    vehicle
}) => {
    const [picture, setPicture] = useState<string | null>(null)

    useEffect(() => {
        const loadPictures = async () => {
            if (vehicle && vehicle.id) {
                const response = await fetchPicturesByVehicle(vehicle.id) as { data: any[] } | undefined;
                if (response && response.data) {
                    setPicture(response.data[0]?.src || null)
                }
            }
        }
        loadPictures()
    }, [])

    return (
        <div className={`vehicle-card ${type}-card`}>
            {type === "result" ? (
                <>
                    <h2>{vehicle.brand} {vehicle.model}</h2>
                    {picture && <Image src={picture} alt={`${vehicle.brand} ${vehicle.model}`}/>}
                    <p>Prix total : {vehicle.totalPrice}</p>
                    <p>{vehicle.description}</p>
                </>
            ) : (
                <>
                    <h2>{vehicle.brand} {vehicle.model}</h2>
                    {picture && <Image src={picture} alt={`${vehicle.brand} ${vehicle.model}`}/>}
                    <p>{vehicle.category}</p>
                </>
            )}
        </div>
    )
}