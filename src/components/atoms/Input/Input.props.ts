export interface IInputProps {
    id: string,
    classNameInput?: string,
    value?: string | number,
    type: string,
    name?: string,
    placeholder: string,
    required?: boolean,
    min?: number | string,
    max?: number | string,
    autoComplete?: string,
    step?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
}