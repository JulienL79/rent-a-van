import { FormSubmitResult } from "../../../types/FormSubmitResult"

export const contactFormData = {
    title: "Contactez-nous",
    fields: [
        {
            id: "email",
            type: "email",
            placeholder: "",
            required: true,
            autoComplete: "email",
            label: "Adresse e-mail",
            onChange: () => {},
        },
        {
            id: "phone",
            type: "tel",
            placeholder: "",
            required: true,
            autoComplete: "tel",
            label: "Numéro de téléphone",
            onChange: () => {},
        },
        {
            id: "subject",
            type: "text",
            placeholder: "",
            required: true,
            autoComplete: "off",
            label: "Sujet",
            onChange: () => {},
        },
        {
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
        formData: { [key: string]: string | File | boolean }
      ): Promise<FormSubmitResult> => {
        console.log("Données du formulaire de contact :", formData);
        return { ok : true, errors: {}}
    },
}