import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@atoms/Button"
import { IEquipmentProps } from "./Equipment.props";
import './Equipment.scss';

export const Equipment: React.FC<IEquipmentProps> = ({ page, id, onInteract }) => {
    if (page && id && onInteract)
        return (
            <>
                <h1>En cours de développement</h1>
                <Link to={`/admin/equipments`} className="btn-link">
                    <Button className="secondary-button inline-button back-button" content="Retour" />
                </Link>
            </>
        )
}