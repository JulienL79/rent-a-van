import { z } from "zod";

export const searchValidation = z.object({
    lat: z
        .string()
        .refine((val) => !isNaN(parseFloat(val)), "La latitude doit être un nombre valide.")
        .transform((val) => parseFloat(val)), // Convertir en nombre
    lon: z
        .string()
        .refine((val) => !isNaN(parseFloat(val)), "La longitude doit être un nombre valide.")
        .transform((val) => parseFloat(val)), // Convertir en nombre
    radius: z
        .string()
        .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, "Le rayon doit être un nombre positif.")
        .transform((val) => parseFloat(val)), // Convertir en nombre
    startDate: z
        .string()
        .refine((val) => !isNaN(new Date(val).getTime()), "La date de début doit être une date valide.")
        .refine((date) => new Date(date) > new Date(), {message: "La date de début doit être ultérieure à aujourd'hui"} )
        .transform((val) => new Date(val)), // Convertir en objet Date
    endDate: z
        .string()
        .refine((val) => !isNaN(new Date(val).getTime()), "La date de fin doit être une date valide.")
        .refine((date) => new Date(date) > new Date(), {message: "La date de fin doit être ultérieure à aujourd'hui"})
        .transform((val) => new Date(val)), // Convertir en objet Date
}).refine(
    (data) => data.startDate < data.endDate,
    {
        message: "La date de début doit être antérieure à la date de fin.",
        path: ["startDate"], // Associe l'erreur à `startDate`
    }
);