import { Route, Routes } from "react-router-dom"
import { Helmet } from "react-helmet"
import { PrivateAuthRoute } from "./PrivateAuthRoute"
import { PrivateNonAuthRoute } from "./PrivateNonAuthRoute"
import { Home } from "@pages/Home"
import { NotFound } from "@pages/Notfound"
import { Register } from "@pages/Register"
import { Login } from "@pages/Login"
import { Privacy } from "@pages/Privacy"
import { Terms } from "@pages/Terms"
import { Legal } from "@pages/Legal"
import { Contact } from "@pages/Contact"
import { Logout } from "@pages/Logout"


export const Router = () => {

    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Helmet>
                        <title>RentAVan - Accueil</title>
                    </Helmet>
                    <Home/>
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

            <Route element={<PrivateAuthRoute />}>
                <Route path="/profile/logout" element={
                    <>
                        <Helmet>
                            <title>RentAVan - Déconnexion</title>
                        </Helmet>
                        <Logout />
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

            <Route element={<PrivateAuthRoute />}>
                <Route path="/profile" element={
                    <>
                        <Helmet>
                            <title>RentAVan - Mon profil</title>
                        </Helmet>
                    </>
                } />
            </Route>

            <Route path="/privacy" element={
                                    <>
                        <Helmet>
                            <title>RentAVan - Politique de Confidentialité</title>
                        </Helmet>
                        <Privacy/>
                    </>
            }/>

            <Route path="/terms" element={
                                    <>
                        <Helmet>
                            <title>RentAVan - Conditions Générales de Vente</title>
                        </Helmet>
                        <Terms/>
                    </>
            }/>

            <Route path="/legal" element={
                                    <>
                        <Helmet>
                            <title>RentAVan - Informations Légales</title>
                        </Helmet>
                        <Legal/>
                    </>
            }/>

            <Route path="/contact" element={
                                    <>
                        <Helmet>
                            <title>RentAVan - Contact</title>
                        </Helmet>
                        <Contact/>
                    </>
            }/>

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