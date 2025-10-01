export interface IFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: "addVehicle";
    content: React.ReactNode;
}