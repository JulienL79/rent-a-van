import axios, { AxiosRequestConfig } from "axios";
import { useModalStore } from "@store/useModalStore";
import { useAuthStore } from "@store/useAuthStore";

export const API_URL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  response => response,
  error => {
    const status = error.response?.status;
    const message = error.response?.data;

    if (status === 401 && message === "Votre session a expiré, veuillez vous reconnecter") {
      const { logout } = useAuthStore.getState();
      logout();
    }
    return Promise.reject(error);
  }
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

export const handleError = (err: any, fallbackMessage: string) => {
    const { setMessage, clearMessage } = useModalStore.getState();
    clearMessage();
    const message = err?.response?.data?.message ?? fallbackMessage;
    setMessage({ type: "error", content: message });
    throw err.response?.data;
};
