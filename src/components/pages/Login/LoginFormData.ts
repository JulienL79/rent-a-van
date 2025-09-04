import { useAuthStore } from "@store/useAuthStore";
import { FormSubmitResult } from "../../../types/FormSubmitResult";
import { IFormProps } from "@organisms/Form";

export const loginFormData: IFormProps = {
	title: "Connexion",
	type: "login",
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
		},
	],
	buttonContent: "Se connecter",
	onSubmit: async (
		formData: { [key: string]: string | File | boolean },
	): Promise<FormSubmitResult> => {
		const { login } = useAuthStore.getState();

		const email = formData.email as string;
		const password = formData.password as string;

		try {
			await login(email, password);
			return { ok: true };
		} catch (error: any) {
			if (error.data && typeof error.data === "object") {
				return { ok: false, errors: error.data };
			}

			return { ok: false, errors: {} };
		}
	},
};
