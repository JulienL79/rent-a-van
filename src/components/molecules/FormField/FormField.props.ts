import { ReactNode } from "react"
import { IInputProps } from "@atoms/Input"

export interface IFormFieldProps extends IInputProps{
        label: ReactNode,
}