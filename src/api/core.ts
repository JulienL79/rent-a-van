import axios, { AxiosRequestConfig } from "axios";
import { useAuthStore } from "@store/useAuthStore";

export const API_URL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error.response?.status;
        const requestUrl = error.config?.url;
        const isAuthCheck = requestUrl?.includes("/auth/me");

        const publicRoutes = [
            "/",
            "/search",
            "/login",
            "/register",
            "/privacy",
            "/terms",
            "/legal",
            "/contact",
        ];

        if (status === 401 && !isAuthCheck) {
            const currentRoute = window.location.pathname;
            const isPublic = publicRoutes.some((route) =>
                currentRoute.startsWith(route)
            );
            if (!isPublic) {
                const { checkAuth } = useAuthStore.getState();
                checkAuth();
            } else {
                // Optionnel : purge du token ou redirection si l'API indique une déconnexion
                const { logout } = useAuthStore.getState();
                logout();
            }
        }
        return Promise.reject(error);
    },
);

export const extractData = <T>(response: { data: any }): T => response.data;

export const api = {
    get: <T>(url: string, config?: AxiosRequestConfig) =>
        axios.get(`${API_URL}${url}`, config).then(extractData<T>),

    post: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
        axios.post(`${API_URL}${url}`, data, config).then(extractData<T>),

    put: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
        axios.put(`${API_URL}${url}`, data, config).then(extractData<T>),

    delete: <T>(url: string, config?: AxiosRequestConfig) =>
        axios.delete(`${API_URL}${url}`, config).then(extractData<T>),
};
