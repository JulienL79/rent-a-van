import { create } from "zustand";

interface ITargetState {
    target: string | null; // ID de l'objet cible,
    setTarget: (id: string) => void;
    clearTarget: () => void;
}

export const useTargetStore = create<ITargetState>((set) => ({
    target: null,
    setTarget: (id) => set({ target: id }),
    clearTarget: () => set({ target: null }),
}));
