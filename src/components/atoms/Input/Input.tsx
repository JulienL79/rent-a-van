import React from "react";
import { IInputProps } from "./Input.props";
import "./Input.css";

export const Input: React.FC<IInputProps> = ({
    id,
    type,
    name,
    placeholder,
    classNameInput = "",
    value = "",
    required = false,
    min,
    max,
    step,
    isDisabled = false,
    autoComplete = "on",
    onChange,
    options = [],
}) => {
    if (type === "number" || type === "range") {
        return (
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className={classNameInput}
                value={value}
                required={required}
                min={min}
                max={max}
                step={step}
                onChange={onChange}
                name={name ?? id}
                disabled={isDisabled}
            />
        );
    }

    if (type === "textarea") {
        return (
            <textarea
                id={id}
                placeholder={placeholder}
                className={classNameInput}
                value={value as string}
                required={required}
                autoComplete={autoComplete}
                minLength={min ? Number(min) : undefined}
                maxLength={max ? Number(max) : undefined}
                onChange={onChange}
                name={name ?? id}
                disabled={isDisabled}
            />
        );
    }

    if (type === "select" || type === "select-multiple") {
        return (
            <select
                id={id}
                name={name ?? id}
                className={classNameInput}
                required={required}
                disabled={isDisabled}
                multiple={type === "select-multiple"}
                value={value}
                onChange={onChange}
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        );
    }

    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            className={classNameInput}
            value={value}
            required={required}
            autoComplete={autoComplete}
            minLength={min ? Number(min) : undefined}
            maxLength={max ? Number(max) : undefined}
            onChange={onChange}
            name={name ?? id}
            disabled={isDisabled}
        />
    );
};