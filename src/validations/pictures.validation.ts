import { z } from "zod";

export const picturesRegisterValidation = z.object({
    src: z.string()
        .trim()
        .url({ message: "L'URL de l'image est invalide" })
        .max(255, { message: "L'URL de l'image ne doit pas dépasser 255 caractères" }),
    vehicleId: z.string()
        .uuid({ message: "L'ID véhicule est invalide" })
        .optional(),
});