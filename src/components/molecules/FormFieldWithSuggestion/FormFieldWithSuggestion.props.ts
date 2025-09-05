import { ReactNode } from "react"
import { IInputProps } from "@atoms/Input"

export interface IFormFieldWithSuggestionProps extends IInputProps{
        label: ReactNode,
        error?: string[],
        onSelect: (value: string) => void
        fetchSuggestions: (query: string) => Promise<{ code: string; nom: string }[]>;
        withSuggestions: boolean
}