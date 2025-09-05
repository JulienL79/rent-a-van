import { ReactNode } from "react";
import { IFormFieldProps } from "@molecules/FormField";
import { FormSubmitResult } from "../../../types/FormSubmitResult";
import { IFormFieldWithSuggestionProps } from "@molecules/FormFieldWithSuggestion";

type TFormValue = string | File | boolean;
export type TFormFieldConfig = IFormFieldProps | IFormFieldWithSuggestionProps;

export interface IFormProps {
    fields: TFormFieldConfig[]
    onSubmit: (data: { [key: string]: TFormValue }) => Promise<FormSubmitResult>
    buttonContent: ReactNode,
    title: string,
    type: "login" | "register" | "resetPassword" | "updateProfile" | "updatePassword" | "contact" | "search"
}