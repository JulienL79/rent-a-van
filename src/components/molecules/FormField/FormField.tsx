import { IFormFieldProps } from "./FormField.props"
import React from "react"
import "./FormField.css"
import { Label } from "@atoms/Label"
import { Input } from "@atoms/Input"

export const FormField:React.FC<IFormFieldProps> = ({
    label,
    id,
    type,
    placeholder,
    onChange,
    autoComplete = "on",
    value = "",
    classNameInput = "",
    required = false,
    min,
    max,
    step
}) => {

    if(classNameInput === "other") {
        return (<></>)
    }

    if(type === "checkbox") {
        return (
            <div className="form-field checkbox-field">
                <Input
                    id={id}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    type={type}
                    required={required}
                    min={min}
                    max={max}
                    autoComplete={autoComplete}
                    step={step}
                    classNameInput={classNameInput}
                />
                <Label htmlFor={id}>{label}</Label>
            </div>
        )
    }

    return (
        <div className={`form-field`}>
            <Label htmlFor={id}>{label}</Label>
            <Input
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                required={required}
                min={min}
                max={max}
                autoComplete={autoComplete}
                step={step}
                classNameInput={classNameInput}
            />
        </div>
    )
}