import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@atoms/Button"
import { IMessageProps } from "./Message.props"
import './Message.css';

export const Message: React.FC<IMessageProps> = ({ page, id, onInteract }) => {
    if (page && id && onInteract)
        return (
            <>
                <h1>En cours de développement</h1>
                <Link to={`/admin/messages`} className="btn-link">
                    <Button className="secondary-button inline-button back-button" content="Retour" />
                </Link>
            </>
        )
}