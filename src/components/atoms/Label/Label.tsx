import React from "react";
import { ILabelProps } from "./Label.props";
import "./Label.scss"

export const Label : React.FC<ILabelProps> = ({
    htmlFor,
    children,
    className = ""
}) => {
    return(
        <label htmlFor={htmlFor} className={`label-app ${className}`}>
            {children}
        </label>
    )
}