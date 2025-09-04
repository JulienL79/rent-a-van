import { useAuthStore } from "@store/useAuthStore"
import { useModalStore } from "@store/useModalStore"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function Logout() {
    const { logout } = useAuthStore()
    const navigate = useNavigate()
    const { setMessage, clearMessage } = useModalStore()

    useEffect(() => {
        const performLogout = async () => {
            try {
                await logout();
                navigate("/login", { replace: true });
                clearMessage()
                setMessage({ type: "success", content: "Déconnexion réussie." });
            } catch (error) {
                navigate("/", { replace: true });
                clearMessage();
                setMessage({ type: "error", content: "Erreur lors de la déconnexion. Veuillez réessayer." });
            }
        };

        performLogout();
    }, [logout, navigate]);

    return null
}