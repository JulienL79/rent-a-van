import { NavItem } from "@atoms/NavItem";
import { useAuthStore } from "@store/useAuthStore";
import { useState } from "react";
import "./Header.css"

export const Header : React.FC = () => {
    const { isAuthenticated } = useAuthStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="app-header">
            <nav>
                <NavItem to="/" content={"RentAVan"} className="logo"/>
                
                <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                    <li><NavItem to={`/camping-car`} content={"Camping-car"}/></li>
                    <li><NavItem to={`/van`} content={"Van"}/></li>
                    <li className='profile-menu'>
                        {
                            isAuthenticated ?
                                <>
                                    <NavItem to={`/profile`} content={"Mon espace"}/>
                                    <ul className="dropdown">
                                        <li><NavItem to={`/profile`} content={"Mon profil"}/></li>
                                        <li><NavItem to={`/profile/order`} content={"Mes Réservations"}/></li>
                                        <li><NavItem to={`/profile/product`} content={"Mes Véhicules"}/></li>
                                        <li><NavItem to={`/profile/mailbox`} content={"Messagerie"}/></li>
                                        <li><NavItem to={`/profile/settings`} content={"Paramètres"}/></li>
                                        <li><NavItem to={`/profile/logout`} content={"Se Déconnecter"}/></li>
                                    </ul>
                                </>
                            : 
                                <>
                                    <NavItem to={`/login`} content={"Mon espace"}/>
                                    <ul className="dropdown">
                                        <li><NavItem to={`/login`} content={"Se Connecter"}/></li>
                                        <li><NavItem to={`/register`} content={"S'inscrire"}/></li>
                                    </ul>
                                </>
                        }
                    </li>
                </ul>
                <div className={`menu-hamburger ${isMenuOpen ? "open" : ""}`} id="burger-menu" onClick={handleClick}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </nav>
        </header>
    )
}