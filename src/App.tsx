import { Router } from "routes/Router"
import { InitialLoader } from "@atoms/InitialLoader"
import { Header } from "@molecules/Header"
import { Footer } from "@molecules/Footer"
import { ErrorModal } from "@atoms/ErrorModal"
import { useErrorStore } from "@store/useErrorStore"
import "./css-global/reset.css"
import "./css-global/main.css"

export const App = () => {

    const { error, clearError } = useErrorStore()

    return (
        <>
            <InitialLoader/>

            <Header/>
            {error && <ErrorModal message={error} onClose={() => clearError()} />}
            <Router />
            <Footer />
        </>
    )
}