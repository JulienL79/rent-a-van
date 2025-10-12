import { ReactNode } from "react"
import { IInputProps } from "@atoms/Input"

export interface IFormFieldWithSuggestionProps extends IInputProps{
        label: ReactNode,
        error?: string[],
        fetchSuggestions: (query: string) => Promise<{ code: string; nom: string }[]>;
        withSuggestions: boolean
}