import { ReactNode } from "react";
import { IFormFieldProps } from "@molecules/FormField";
import { FormSubmitResult } from "../../../types/FormSubmitResult";
import { IFormFieldWithSuggestionProps } from "@molecules/FormFieldWithSuggestion";

export type TFormValue = string | File | boolean | string[];
export type TFormFieldConfig =
  | ({ kind: "base" } & IFormFieldProps)
  | ({ kind: "suggestion" } & IFormFieldWithSuggestionProps);

export interface IFormProps {
    fields: TFormFieldConfig[]
    onSubmit: (data: { [key: string]: TFormValue }) => Promise<FormSubmitResult>
    buttonContent: ReactNode,
    title: string,
    isDisabled?: boolean,
    type: "login" | "register" | "resetPassword" | "updateProfile" | "updateVehicle" | "updateCredentials" | "contact" | "search" | "addVehicle"
}