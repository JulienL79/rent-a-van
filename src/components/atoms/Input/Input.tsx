import { IInputProps } from "./Input.props";
import React from "react";
import "./Input.css"

export const Input: React.FC<IInputProps> = ({
    id,
    type,
    placeholder,
    classNameInput = "",
    value = "",
    required = false,
    min,
    max,
    step,
    autoComplete = "on",
    onChange
}) => {


    if(type === "number" || type === "range") {
        const maxNumber = max ? max : undefined;
        const minNumber = min ? min : undefined;
        const stepValue = step ? step : undefined;

        return (
            <input id={id} type={type} placeholder={placeholder} className={classNameInput} value={value} required={required} min={minNumber} max={maxNumber} step={stepValue} onChange={onChange}/>
        )

    } if(type === "textarea" ) {
        
        const maxLength = max ? max : undefined;
        const minLength = min ? min : undefined;

        return (
            <textarea id={id} placeholder={placeholder} className={classNameInput} value={value} required={required} autoComplete={autoComplete} minLength={minLength} maxLength={maxLength} onChange={onChange}/>
        )

    } else {
        const maxLength = max ? max : undefined;
        const minLength = min ? min : undefined;

        return (
            <input id={id} type={type} placeholder={placeholder} className={classNameInput} value={value} required={required} autoComplete={autoComplete} minLength={minLength} maxLength={maxLength} onChange={onChange}/>
        )
    }


};