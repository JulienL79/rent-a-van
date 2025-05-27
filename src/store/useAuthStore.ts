import { create } from "zustand";

interface IDataUser {
    firstName: string,
    lastName: string,
    token: string,
}

interface IDataState {
    isAuthenticated : boolean,
    userDatas: IDataUser | null,
    login: (userDatas : IDataUser) => void,
    logout: () => void,
}

export const useAuthStore = create<IDataState>((set) => ({
    isAuthenticated: false,
    userDatas: null,
    login: (userDatas) => {
        set({ 
            isAuthenticated: true,
            userDatas: userDatas
        })
    },
    logout: () => {
        set({
            isAuthenticated: false,
            userDatas: null
        })
    }
}))