import { FormSubmitResult } from "../../../types/FormSubmitResult";
import { IFormProps } from "@organisms/Form";

export const homeFormData : IFormProps = {
    title: "Recherche",
    type: "search",
    fields: [
        {
            id: "startDate",
            type: "date",
            placeholder: "",
            required: true,
            label: "Date de début",
            onChange: () => {},
        },
        {
            id: "endDate",
            type: "date",
            placeholder: "",
            required: true,
            label: "Date de fin",
            onChange: () => {},
        },
        {
            id: "city",
            type: "text",
            placeholder: "Votre ville",
            required: true,
            autoComplete: "address-level2",
            label: "Lieu de départ",
            onChange: () => {},
        },
        {
            id: "radius",
            type: "range",
            placeholder: "",
            required: true,
            label: "Rayon (en km)",
            min: "10",
            max: "100",
            step: "5",
            onChange: () => {},
        },
    ],
    buttonContent: "Rechercher",
    onSubmit: async (
        formData: { [key: string]: string | File | boolean },
    ): Promise<FormSubmitResult> => {
        console.log(formData)
        return { ok: true}
    },
};
