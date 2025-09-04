import { createUser } from "@api/userApi";
import { TermsAndPrivacy } from "./TermAndPrivacy";
import { UserRegisterPayload } from "../../../types/User";
import { FormSubmitResult } from "../../../types/FormSubmitResult";
import { IFormProps } from "@organisms/Form";

export const registerFormData: IFormProps = {
    title: "Créer un compte",
    type: "register",
    fields: [
        {
            id: "firstName",
            type: "text",
            placeholder: "",
            required: true,
            autoComplete: "given-name",
            label: "Prénom",
            onChange: () => {},
        },
        {
            id: "lastName",
            type: "text",
            placeholder: "",
            required: true,
            autoComplete: "family-name",
            label: "Nom de famille",
            onChange: () => {},
        },
        {
            id: "birthdate",
            type: "date",
            placeholder: "",
            required: true,
            autoComplete: "bday",
            label: "Date de naissance",
            onChange: () => {},
        },
        {
            id: "addressStreet",
            type: "text",
            placeholder: "",
            required: true,
            autoComplete: "street-address",
            label: "Adresse",
            onChange: () => {},
        },
        {
            id: "addressCity",
            type: "text",
            placeholder: "",
            required: true,
            autoComplete: "address-level2",
            label: "Ville",
            onChange: () => {},
        },
        {
            id: "addressZip",
            type: "text",
            placeholder: "",
            required: true,
            autoComplete: "postal-code",
            label: "Code postal",
            onChange: () => {},
        },
        {
            id: "addressCountry",
            type: "text",
            placeholder: "",
            required: true,
            autoComplete: "country-name",
            label: "Pays",
            onChange: () => {},
        },
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
            id: "phoneNumber",
            type: "tel",
            placeholder: "",
            required: true,
            autoComplete: "tel",
            label: "Numéro de téléphone",
            onChange: () => {},
        },
        {
            id: "password",
            type: "password",
            placeholder: "",
            required: true,
            autoComplete: "current-password",
            label: "Mot de passe",
            onChange: () => {},
        },
        {
            id: "confirmPassword",
            type: "password",
            placeholder: "",
            required: true,
            autoComplete: "new-password",
            label: "Confirmer le mot de passe",
            onChange: () => {},
        },
        {
            id: "termsAccepted",
            type: "checkbox",
            placeholder: "",
            required: true,
            autoComplete: "",
            label: TermsAndPrivacy,
            onChange: () => {},
        },
    ],
    buttonContent: "S'inscrire",
    onSubmit: async (
        formData: { [key: string]: string | File | boolean },
    ): Promise<FormSubmitResult> => {
        const payload: UserRegisterPayload = {
            firstname: formData.firstName as string,
            lastname: formData.lastName as string,
            email: formData.email as string,
            password: formData.password as string,
            confirmPassword: formData.confirmPassword as string,
            phoneNumber: formData.phoneNumber as string,
            birthdate: new Date(formData.birthdate as string),
            addressStreet: formData.addressStreet as string,
            addressCity: formData.addressCity as string,
            addressZip: formData.addressZip as string,
            addressCountry: formData.addressCountry as string,
            termsAccepted: formData.termsAccepted === true,
        };

        try {
            await createUser(payload);
            return { ok: true };
        } catch (error: any) {

            if (error.data && typeof error.data === "object") {
                return { ok: false, errors:  error.data };
            }

            return { ok: false, errors: {} };
        }
    },
};
