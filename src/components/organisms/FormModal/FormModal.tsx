import React, { useEffect } from "react";
import { IFormModalProps } from "./FormModal.props";
import './FormModal.css'
import { Form } from "@organisms/Form";
import { FormSubmitResult } from "../../../types/FormSubmitResult";
import { VehicleRegisterPayload } from "../../../types/Vehicle";
import { vehiclesRegisterValidation } from "validations";
import { createVehicle } from "@api/vehicleApi";
import { addVehicleFormData } from "./addVehicleFormData";

export const FormModal: React.FC<IFormModalProps> = ({
    isOpen,
    onClose,
    type,
    content
}) => {
    const handleSubmit = async (formData: { [key: string]: any }): Promise<FormSubmitResult> => {
        try {
            if(type === "addVehicle") {
                const parsed = vehiclesRegisterValidation.parse(formData);
                const payload: VehicleRegisterPayload = parsed;
                await createVehicle(payload);
            }

            return { ok: true };
        } catch (error: any) {
            if (error.data && typeof error.data === "object") {
                return { ok: false, errors: error.data };
            }

            return { ok: false, errors: {} };
        }
    }

    return (
        <div className="modal-form">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <Form {...addVehicleFormData}/>
            </div>
        </div>
    )
}