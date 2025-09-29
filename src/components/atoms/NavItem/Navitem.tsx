import React from "react";
import { Link } from "react-router-dom";
import { INavItemProps } from "./NavItem.props";
import { useNavigate } from "react-router-dom";
import "./NavItem.css"

export const NavItem : React.FC<INavItemProps> = ({
    to,
    content,
    className = "",
    onClick
}) => {
    const navigate = useNavigate()

    const handleClick = (e: React.MouseEvent) => {
        if (onClick) {
            e.preventDefault();
            onClick();
        }
        navigate(to)
    };


    if(onClick === undefined) {
        return (
            <Link to={to} className={`${className}`}>
                {content}
            </Link>
        )
    }

    return (
        <Link to={to} className={`${className}`} onClick={handleClick}>
            {content}
        </Link>
    )
}