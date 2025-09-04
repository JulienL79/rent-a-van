import { checkAuth, loginAPI, logoutAPI } from "@api/userApi";
import { create } from "zustand";

interface IDataUser {
    firstName: string,
    lastName: string,
    token: string,
}

interface IDataState {
    isAuthenticated : boolean,
    user: IDataUser | null,
    isLoading: boolean,
    login: (email: string, password: string) => Promise<void>,
    logout: () => Promise<void>,
    checkAuth: () => Promise<void>,
}

export const useAuthStore = create<IDataState>((set) => ({
    user: null,
    isAuthenticated : false,
    isLoading: true,
    // Connexion
    login: async (email, password) => {
        try {
            await loginAPI(email, password);
            const user = await checkAuth();
            set({ user, isAuthenticated: true });
        } catch (error) {
            throw error;
        }
    },
    // Déconnexion
    logout: async () => {
		try {
			await logoutAPI();
			set({ user: null, isAuthenticated: false });
		} catch (error) {
            throw error;
		}

    },
	checkAuth: async () => {
		try {
			const user = await checkAuth()
			console.log("user dans checkAuth", user)
			set({ user, isAuthenticated: true, isLoading: false });
		} catch (error) {
			set({ user: null, isAuthenticated: false, isLoading: false });
            throw error;
		}
	}
}))