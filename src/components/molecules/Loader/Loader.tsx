import React from "react";
import { ILoaderProps } from "./LoaderProps";
import { Image } from "@atoms/Image";
import Logo from '/icon.png'
import "./Loader.css"

export const Loader : React.FC<ILoaderProps> = ({
    mainMessage,
    suppMessage
}) => {
    return(
        <div className="loading-container">
            <div className="loader">
                <div className="spinner large-spinner"></div>
                
                <Image src={Logo} alt="Logo" className="loading-image"/>
                
                <div className="spinner small-spinner"></div>
            </div>
            <p className="loading-text">{mainMessage}</p>

            {
                suppMessage && suppMessage.map((message, index) => {
                    return <p key={`${index}-${message}`}className="small-text">{message}</p>
                })
            }   

        </div>
    )

}