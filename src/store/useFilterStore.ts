import { create } from "zustand";

interface IFilterState {
    vehicleType: "camping-car" | "van",
    locationCoord: string | null,
    locationCity: string | null,
    startDate: Date | null,
    endDate: Date | null,
    radius: number,
    beds: number | null,
    options: string[] | null,
    sortingByPrice: "ascending" | "descending" | null,
    setVehicleType: (type: "camping-car" | "van") => void,
    setStartDate: (startDate: Date) => void,
    setEndDate: (startDate: Date) => void,
    setLocationCity: (city: string) => void,
    setRadius: (radius: number) => void,
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
    radius: 50,
    beds: null,
    options: null,
    sortingByPrice: null,
    setVehicleType: (type) => {
        set({vehicleType : type})
    },
    setStartDate: (startDate) => {
        set({startDate})
    },
    setEndDate: (endDate) => {
        set({endDate})
    },
    setLocationCity: (city) => {
        set({locationCity : city})
    },
    setRadius: (radius) => {
        set({radius})
    },
    resetSearch: () => {
        set({
            locationCoord : null,
            locationCity : null,
            startDate : null,
            endDate : null,
            radius: 50
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