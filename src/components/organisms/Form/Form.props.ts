import { ReactNode } from "react";
import { IFormFieldProps } from "@molecules/FormField";

export interface IFormProps {
    fields: IFormFieldProps[]
    onSubmit: (data: { [key: string]: string }) => void
    buttonContent: ReactNode,
    title: string,
    type: "login" | "register" | "resetPassword" | "updateProfile" | "updatePassword"
}