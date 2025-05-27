import { create } from "zustand";

interface IFilterState {
    vehicleType: "camping-car" | "van",
    locationCoord: string | null,
    locationCity: string | null,
    startDate: Date | null,
    endDate: Date | null,
    beds: number | null,
    options: string[] | null,
    sortingByPrice: "ascending" | "descending" | null,
    setVehicleType: (type: "camping-car" | "van") => void,
    makeSearch: (locationCoord: string, locationCity: string, startDate: Date, endDate: Date) => void,
    resetSearch: () => void,
    setFilters: (filter: IFilter) => void,
    resetFilters: () => void
}

interface IFilter {
    beds?: number,
    options?: string[],
    sortingByPrice?: "ascending" | "descending"
}

export const useFilterStore = create<IFilterState>((set) => ({
    vehicleType: "camping-car",
    locationCoord: null,
    locationCity: null,
    startDate: null,
    endDate: null,
    beds: null,
    options: null,
    sortingByPrice: null,
    setVehicleType: (type : "camping-car" | "van") => {
        set({vehicleType : type})
    },
    makeSearch: (locationCoord : string, locationCity : string, startDate : Date, endDate : Date) => {
        set({
            locationCoord : locationCoord,
            locationCity : locationCity,
            startDate : startDate,
            endDate : endDate
        })
    },
    resetSearch: () => {
        set({
            locationCoord : null,
            locationCity : null,
            startDate : null,
            endDate : null
        })
    },
    setFilters: (filter : IFilter) => {
        set({
            beds : filter.beds ? filter.beds : null,
            options : filter.options ? filter.options : null,
            sortingByPrice : filter.sortingByPrice ? filter.sortingByPrice : null
        })
    },
    resetFilters: () => {
        set({
            beds : null,
            options : null,
            sortingByPrice : null
        })
    }
}))