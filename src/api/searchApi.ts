import { RawSearchPayload } from "../types/Search";
import { api } from "./core";
import { handleError } from "@utils/feedbackHandler";

export const searchVehicles = async (payload : RawSearchPayload) => {
    try {
        const url = `/search/${payload.type}/${payload.lat}/${payload.lon}/${payload.radius}/${payload.startDate}/${payload.endDate}`;
        return await api.get<{ message: string, data: [] }>(url);
    } catch (err) {
        handleError(err, "Erreur lors de la recherche de véhicules");
    }
};
