import React, { useEffect } from "react";
import { IFormProps, TFormFieldConfig } from "./Form.props";
import { FormField } from "@molecules/FormField";
import { Button } from "@atoms/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContactInfo } from "@molecules/ContactInfo";
import { useModalStore } from "@store/useModalStore";
import { useFilterStore } from "@store/useFilterStore";
import "./Form.css"
import { FormFieldWithSuggestion, IFormFieldWithSuggestionProps } from "@molecules/FormFieldWithSuggestion";

type FormValue = string | File | boolean;

export const Form: React.FC<IFormProps> = ({ fields, onSubmit, buttonContent, title, type }) => {
    const [formData, setFormData] = useState<{ [key: string]: any }>({})
    const [formErrors, setFormErrors] = useState<{ [key: string]: string[] }>({});
    const navigate = useNavigate()
    const { setMessage, clearMessage } = useModalStore()
    const { vehicleType, setVehicleType } = useFilterStore()

    function isFieldWithSuggestion(
        field: TFormFieldConfig
    ): field is IFormFieldWithSuggestionProps {
        return "withSuggestions" in field;
    }


    const handleChangeType = (type: "camping-car" | "van") => {
        setVehicleType(type)
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const target = e.target as HTMLInputElement;
        const { id, type, value } = target;

        let newValue: FormValue = value;

        if (type === "file") {
            newValue = target.files?.[0] ?? "";
        } else if (type === "checkbox") {
            newValue = target.checked;
        }

        setFormData((prev) => ({
            ...prev,
            [id]: newValue,
        }));

        const field = fields.find((f) => f.id === id);
        if (field?.onChange) {
            field.onChange?.(e as React.ChangeEvent<HTMLInputElement>);
        }

    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await onSubmit(formData);
            console.log(result)
            if (result?.ok) {
                setFormData({});
                setFormErrors({});
                const navigateTo = type === "login" ? "/" : type === "register" ? "/login" : "/";
                navigate(navigateTo, { replace: true });

                const messageToast = type === "register" ? "Inscription réussie ! Vous pouvez maintenant vous connecter." : null;
                if (messageToast) {
                    clearMessage()
                    setMessage({ type: "success", content: messageToast });
                }
            } else if (result?.errors) {
                console.log(result.errors);
                setFormErrors(result.errors);
            }
        } catch (err) {
            console.error("Erreur inattendue :", err);
        }

    };

    useEffect(() => {
        const initialValues: { [key: string]: any } = {};

        fields.forEach((field) => {
            initialValues[field.id] = field.value ?? "";
        });

        setFormData(initialValues);
    }, [fields]);

    return (
        <div className={`form-container ${type}-form`}>
            {type !== "search" && <h2 className="form-title">{title}</h2>}
            <form onSubmit={handleSubmit} className="form">
                {type === "search" && (
                    <div className="toggle-switch-search">
                        <p onClick={() => handleChangeType("camping-car")} className={vehicleType === "camping-car" ? "active" : ""}>Camping-car</p>
                        <p onClick={() => handleChangeType("van")} className={vehicleType === "van" ? "active" : ""}>Van</p>
                    </div>
                )}

                {fields.map((field) => {

                    if (isFieldWithSuggestion(field) && field.withSuggestions === true) {
                        return (
                            <FormFieldWithSuggestion
                                key={field.id}
                                label={field.label}
                                type="text"
                                id={field.id}
                                name={field.name}
                                placeholder={field.placeholder}
                                required={field.required}
                                onChange={handleChange}
                                onSelect={field.onSelect}
                                fetchSuggestions={field.fetchSuggestions}
                                withSuggestions={true}
                                value={formData[field.id] || ""}
                                error={formErrors[field.id]}
                            />
                        )

                    } else {
                        const value = formData[field.id] || "";
                        const isRange = field.type === "range";

                        const dynamicLabel = isRange
                            ? `${field.label} : ${value} km`
                            : field.label;

                        return (
                            <FormField
                                key={field.id}
                                label={dynamicLabel}
                                id={field.id}
                                type={field.type}
                                name={field.name}
                                placeholder={field.placeholder}
                                required={field.required}
                                onChange={handleChange}
                                min={field.min}
                                max={field.max}
                                step={field.step}
                                value={value}
                                error={formErrors[field.id]}
                            />
                        )
                    }


                })}
                <Button content={buttonContent} />
            </form>
            {
                type === "login" && (
                    <div className="form-footer">
                        <p>Pas encore inscrit ? <Link to="/register" className="text-link">S'inscrire</Link></p>
                    </div>
                )
            }
            {
                type === "register" && (
                    <div className="form-footer">
                        <p>Déjà un compte ? <Link to="/login" className="text-link">Se connecter</Link></p>
                    </div>
                )
            }
            {
                type === "contact" && (
                    <div className="form-footer">
                        <ContactInfo />
                    </div>
                )
            }
        </div>
    );

}