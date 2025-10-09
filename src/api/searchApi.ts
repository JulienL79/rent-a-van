import { RawSearchPayload } from "../types/Search";
import { api } from "./core";
import { handleError } from "@utils/feedbackHandler";

export const searchVehicles = async (payload : RawSearchPayload) => {
    try {
        return await api.post<{ message: string, data: [] }>("/search/results", payload);
    } catch (err) {
        handleError(err, "Erreur lors de la recherche de véhicules");
    }
};
