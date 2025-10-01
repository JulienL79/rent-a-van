import { IFormProps } from "@organisms/Form";
import { FormSubmitResult } from "../../../types/FormSubmitResult"

export const contactFormData : IFormProps = {
    title: "Contactez-Nous",
    type: "contact",
    fields: [
        {
            kind: "base",
            id: "email",
            type: "email",
            placeholder: "",
            required: true,
            autoComplete: "email",
            label: "Adresse e-mail",
            onChange: () => {},
        },
        {
            kind: "base",
            id: "phone",
            type: "tel",
            placeholder: "",
            required: true,
            autoComplete: "tel",
            label: "Numéro de téléphone",
            onChange: () => {},
        },
        {
            kind: "base",
            id: "subject",
            type: "text",
            placeholder: "",
            required: true,
            autoComplete: "off",
            label: "Sujet",
            onChange: () => {},
        },
        {
            kind: "base",
            id: "message",
            type: "textarea",
            placeholder: "",
            required: true,
            autoComplete: "off",
            label: "Message",
            onChange: () => {},
        }
    ],
    buttonContent: "Envoyer",
    onSubmit: async (
        formData: { [key: string]: string | File | boolean | string[] }
      ): Promise<FormSubmitResult> => {
        console.log("Données du formulaire de contact :", formData);
        return { ok : true, errors: {}}
    },
}