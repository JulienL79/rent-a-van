import { Router } from "routes/Router"
import { InitialLoader } from "@atoms/InitialLoader"
import { Header } from "@molecules/Header"
import { Footer } from "@molecules/Footer"
import { Alert } from "@atoms/Alert"
import "./css-global/reset.css"
import "./css-global/main.css"
import { useEffect } from "react"
import { useAuthStore } from "@store/useAuthStore"
import { useAlertStore } from "@store/useAlertStore"
import { AuthRedirector } from "@routes/AuthRedirector"

export const App = () => {

    const { type, message, clearMessage } = useAlertStore()
    const { checkAuth } = useAuthStore()

    useEffect(() => {
        checkAuth()
    }, [])

    return (
        <div className="app-container">
            <InitialLoader/>
            <AuthRedirector />
            <Header/>
            {message && type && <Alert type={type} message={message} onClose={() => clearMessage()} />}
            <main>
                <Router />
            </main>
            <Footer />
        </div>
    )
}