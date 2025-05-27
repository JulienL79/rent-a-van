import React from "react";
import { IFormProps } from "./Form.props";
import { FormField } from "@molecules/FormField";
import { Button } from "@atoms/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css"

export const Form: React.FC<IFormProps> = ({ fields, onSubmit, buttonContent, title, type }) => {
    const [formData, setFormData] = useState<{ [key: string]: string }>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            onSubmit(formData);
            setFormData({})
        } catch(err) {
            console.error(err)
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">{title}</h2>
            <form onSubmit={handleSubmit} className="form">
                {fields.map((field) => (
                    <FormField
                        key={field.id}
                        label={field.label}
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        onChange={handleChange}
                        min={field.min}
                        step={field.step}
                        value={formData[field.id] || ""}
                    />
                ))}
                <Button content={buttonContent}/>
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
        </div>
        
    );

}