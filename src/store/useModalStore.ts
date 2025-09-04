import { create } from "zustand";

type MessagePayload = {
    content: string;
    type: "error" | "info" | "success";
};
interface ModalState {
    type: "error" | "info" | "success" | null;
    message: string | null;
    setMessage: (message: MessagePayload) => void;
    clearMessage: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
    message: null,
    type: null,
    setMessage: (msg : MessagePayload) => set({ message: msg.content, type: msg.type }),
    clearMessage: () => set({ message: null, type: null}),
}));
