import { ReactNode } from "react";
import { IFormFieldProps } from "@molecules/FormField";
import { FormSubmitResult } from "../../../types/FormSubmitResult";

type FormValue = string | File | boolean;

export interface IFormProps {
    fields: IFormFieldProps[]
    onSubmit: (data: { [key: string]: FormValue }) => Promise<FormSubmitResult>
    buttonContent: ReactNode,
    title: string,
    type: "login" | "register" | "resetPassword" | "updateProfile" | "updatePassword" | "contact" | "search"
}