import { Route, Routes } from "react-router-dom"
import { Helmet } from "react-helmet"
import { PrivateAuthRoute } from "./PrivateAuthRoute"
import { PrivateNonAuthRoute } from "./PrivateNonAuthRoute"
import { Home } from "@pages/Home"
import { NotFound } from "@pages/Notfound"
import { Register } from "@pages/Register"
import { Login } from "@pages/Login"


export const Router = () => {

    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Helmet>
                        <title>RentAVan - Accueil</title>
                    </Helmet>
                    <Home />
                </>
            } />

            <Route element={<PrivateNonAuthRoute />}>
                <Route path="/login" element={
                    <>
                        <Helmet>
                            <title>RentAVan - Connexion</title>
                        </Helmet>
                        <Login />
                    </>
                } />
            </Route>

            <Route element={<PrivateNonAuthRoute />}>
                <Route path="/register" element={
                    <>
                        <Helmet>
                            <title>RentAVan - Inscription</title>
                        </Helmet>
                        <Register />
                    </>
                } />
            </Route>

            <Route path="*" element={
                <>
                    <Helmet>
                        <title>RentAVan - Page non trouvée</title>
                    </Helmet>
                    <NotFound/>
                </>
            } />
        </Routes>
    )
}