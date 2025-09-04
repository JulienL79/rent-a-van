import {
    UpdateCredentialsPayload,
    UserRegisterPayload,
    UserUpdatePayload,
} from "../types/User";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

axios.defaults.withCredentials = true;

export const fetchAllUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        const user = response.data;
        return user.data;
    } catch (err) {
        console.error("Erreur lors de la récupération des utilisateurs :", err);
        throw new Error("Erreur lors de la récupération des utilisateurs");
    }
};

export const fetchUserById = async (user_id: string) => {
    try {
        if (user_id) {
            const response = await axios.get(`${API_URL}/users/${user_id}`);
            const user = response.data;
            return user.data;
        } else {
            throw new Error("Erreur lors de la récupération de l'utilisateur");
        }
    } catch (err) {
        console.error("Erreur lors de la récupération de l'utilisateur :", err);
        throw new Error("Erreur lors de la récupération de l'utilisateur");
    }
};

export const fetchUserByIdWithDetails = async (user_id: string) => {
    try {
        if (user_id) {
            const response = await axios.get(
                `${API_URL}/users/details/${user_id}`,
            );
            const user = response.data;
            return user.data;
        } else {
            throw new Error("Erreur lors de la récupération de l'utilisateur ");
        }
    } catch (err) {
        console.error(
            "Erreur lors de la récupération de l'utilisateur avec détails :",
            err,
        );
        throw new Error(
            "Erreur lors de la récupération de l'utilisateur avec détails",
        );
    }
};

export const createUser = async (userInformation: UserRegisterPayload) => {
    try {
        const response = await axios.post(
            `${API_URL}/auth/register`,
            userInformation,
        );
        return { ok: true, data: response.data };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response?.data) {
            return { ok: false, data: err.response.data };
        }
        return { ok: false, data: { message: "L'utilisateur existe déjà" } };
    }
};

export const deleteUser = async (user_id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/users/${user_id}`);
        console.log(response);
        return response;
    } catch (err) {
        console.error("Erreur lors de la suppression de l'utilisateur:", err);
        return false;
    }
};

export const updateUser = async (user_id: string, user: UserUpdatePayload) => {
    try {
        const response = await axios.put(`${API_URL}/users/${user_id}`, user);
        console.log(response);
        return response;
    } catch (err) {
        console.error("Erreur lors de la modification de l'utilisateur:", err);
        throw new Error("Erreur lors de la modification de l'utilisateur");
    }
};

export const updateUserCredentials = async (
    user_id: string,
    user: UpdateCredentialsPayload,
) => {
    try {
        const response = await axios.put(
            `${API_URL}/users/credentials/${user_id}`,
            user,
        );
        console.log(response);
        return response;
    } catch (err) {
        console.error("Erreur lors de la modification de l'utilisateur:", err);
        throw new Error("Erreur lors de la modification de l'utilisateur");
    }
};

export const updateUserProfilePicture = async (
    userId: string,
    picture?: File,
) => {
    try {
        let response;

        if (picture) {
            const formData = new FormData();
            formData.append("pictures", picture);

            response = await axios.put(
                `${API_URL}/users/pictures/${userId}`,
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                },
            );
        } else {
            // Aucun fichier → on envoie une requête vide pour déclencher la suppression
            response = await axios.put(
                `${API_URL}/users/pictures/${userId}`,
                null,
            );
        }

        return response;
    } catch (err) {
        console.error(
            "Erreur lors de la modification de la photo de profil:",
            err,
        );
        throw new Error("Erreur lors de la modification de la photo de profil");
    }
};

export const loginAPI = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, {
            email,
            password,
        });
        return { ok: true, data: response.data };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response?.data) {
            return { ok: false, data: err.response.data };
        }
        return { ok: false, data: { message: "Erreur de connexion" } };
    }
};

export const logoutAPI = async () => {
    const response = await axios.get(`${API_URL}/auth/logout`);
    console.log(response);
    return;
};

export const checkAuth = async () => {
    const response = await axios.get(`${API_URL}/auth/me`);
    console.log("response du server:", response);
    const user = response.data.data;
    return user;
};
