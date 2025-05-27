export interface IInputProps {
    id: string,
    classNameInput?: string,
    value?: string | number,
    type: string,
    placeholder: string,
    required?: boolean,
    min?: number,
    max?: number,
    autoComplete?: string,
    step?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
}