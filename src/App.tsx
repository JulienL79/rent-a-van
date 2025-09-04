import { Router } from "routes/Router"
import { InitialLoader } from "@atoms/InitialLoader"
import { Header } from "@molecules/Header"
import { Footer } from "@molecules/Footer"
import { Modal } from "@atoms/Modal"
import "./css-global/reset.css"
import "./css-global/main.css"
import { useEffect } from "react"
import { useAuthStore } from "@store/useAuthStore"
import { useModalStore } from "@store/useModalStore"

export const App = () => {

    const { type, message, clearMessage } = useModalStore()

    useEffect(() => {
        useAuthStore.getState().checkAuth()
    }, [])

    return (
        <div className="app-container">
            <InitialLoader/>

            <Header/>
            {message && type && <Modal type={type} message={message} onClose={() => clearMessage()} />}
            <main>
                <Router />
            </main>
            <Footer />
        </div>
    )
}