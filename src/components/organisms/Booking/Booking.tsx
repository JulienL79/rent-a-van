import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@atoms/Button"
import { IBookingProps } from "./Booking.props";
import './Booking.scss';

export const Booking: React.FC<IBookingProps> = ({ page, id, onInteract }) => {
    if (page && id && onInteract)
        return (
            <>
                <h1>En cours de développement</h1>
                <Link to={`/admin/bookings`} className="btn-link">
                    <Button className="secondary-button inline-button back-button" content="Retour" />
                </Link>
            </>
        )
}