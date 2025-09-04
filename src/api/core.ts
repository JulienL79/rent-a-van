import axios from "axios";
import { useModalStore } from "@store/useModalStore";

export const API_URL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

export const extractData = <T>(response: { data: any }): T => response.data;

export const api = {
    get: <T>(url: string) => axios.get(`${API_URL}${url}`).then(extractData<T>),
    post: <T>(url: string, data?: any) =>
        axios.post(`${API_URL}${url}`, data).then(extractData<T>),
    put: <T>(url: string, data?: any) =>
        axios.put(`${API_URL}${url}`, data).then(extractData<T>),
    delete: <T>(url: string) =>
        axios.delete(`${API_URL}${url}`).then(extractData<T>),
};

export const handleError = (err: any, fallbackMessage: string) => {
    const { setMessage, clearMessage } = useModalStore.getState();
    clearMessage();
    const message = err?.response?.data?.message ?? fallbackMessage;
    setMessage({ type: "error", content: message });
    throw err.response?.data;
};
