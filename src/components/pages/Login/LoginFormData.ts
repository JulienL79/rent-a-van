export const loginFormData = {
    fields: [
        {
            id: "email",
            type: "email",
            placeholder: "",
            required: true,
            autoComplete: "email",
            label: "Adresse e-mail",
            onChange: () => {},
        },
        {
            id: "password",
            type: "password",
            placeholder: "",
            required: true,
            autoComplete: "current-password",
            label: "Mot de passe",
            onChange: () => {},
        }
    ],
    buttonContent: "Se connecter",
    onSubmit: () => {},
    title: "Connexion"
}