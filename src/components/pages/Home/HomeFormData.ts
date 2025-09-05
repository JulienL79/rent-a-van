import { fetchCityByNameAndPostalCode } from "@api/addressApi";
import { IFormProps } from "@organisms/Form";
import { useFilterStore } from "@store/useFilterStore";
import { FormSubmitResult } from "../../../types/FormSubmitResult";

const filterState = useFilterStore.getState();

export const homeFormData: IFormProps = {
    title: "Recherche",
    type: "search",
    fields: [
        {
            id: "startDate",
            type: "date",
            placeholder: "",
            required: true,
            label: "Date de début",
            onChange: (e) => {
                const value = e.target.value;
                filterState.setStartDate(new Date(value));
            },
        },
        {
            id: "endDate",
            type: "date",
            placeholder: "",
            required: true,
            label: "Date de fin",
            onChange: (e) => {
                const value = e.target.value;
                filterState.setEndDate(new Date(value));
            },
        },
        {
            id: "city",
            type: "text",
            placeholder: "Ville ou code postal",
            required: true,
            autoComplete: "address-level2",
            label: "Lieu de départ",
            withSuggestions: true,
            fetchSuggestions: fetchCityByNameAndPostalCode,
            onChange: (e) => {
                const value = e.target.value;
                filterState.setLocationCity(value);
            },
        },
        {
            id: "radius",
            type: "range",
            placeholder: "",
            required: true,
            label: "Rayon (en km)",
            min: "10",
            max: "100",
            step: "5",
            onChange: (e) => {
                const value = e.target.value;
                filterState.setRadius(Number(value));
            },
        },
    ],
    buttonContent: "Rechercher",
    onSubmit: async (): Promise<FormSubmitResult> => {
            return {ok : true}
        },
};
