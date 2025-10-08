import { IButtonProps } from "./Button.props";
import React from "react";
import "./Button.css"

export const Button : React.FC<IButtonProps> = ({
    className = "primary-button", 
    content, 
    onClick, 
    isDisabled = false, 
    isScrollToTop = false
}) => {

    const handleClick = () => {
        if(isScrollToTop) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        if(onClick) {
            onClick();
        }
    }

    return (
        <button className={`button-app ${className} ${isDisabled ? 'disabled-button' : ''}`} onClick={handleClick} disabled={isDisabled}>{content}</button>
    )
}