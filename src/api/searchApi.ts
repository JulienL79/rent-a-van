import { api, handleError } from "./core";

export const searchVehicles = async (
    lat: number,
    lon: number,
    radius: number,
    startDate: string,
    endDate: string,
) => {
    try {
        const url = `/search/${lat}/${lon}/${radius}/${startDate}/${endDate}`;
        return await api.get<any[]>(url);
    } catch (err) {
        handleError(err, "Erreur lors de la recherche de véhicules");
    }
};
