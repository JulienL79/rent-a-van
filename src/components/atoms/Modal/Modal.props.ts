export interface IModal {
    message: string,
    type: "error" | "info" | "success",
    onClose: () => void
}