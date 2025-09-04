import { NavItem } from "@atoms/NavItem";
import { useAuthStore } from "@store/useAuthStore";
import { useState } from "react";
import "./Header.css"
import { useFilterStore } from "@store/useFilterStore";

export const Header: React.FC = () => {
    const { isAuthenticated } = useAuthStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const { setVehicleType } = useFilterStore();
    const isBurgerActive = isMenuOpen && !isClosing;

    const handleChangeType = (type: "camping-car" | "van") => {
        setVehicleType(type)
    }

    const handleClick = () => {
        if (isMenuOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setIsMenuOpen(false);
                setIsClosing(false);
            }, 500); // durée de l'animation slideLeft
        } else {
            setIsMenuOpen(true);
        }
    };



    const handleNavClick = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsMenuOpen(false);
            setIsClosing(false);
        }, 500); // même durée que l'animation CSS

    };

    return (
        <header className="app-header">
            <nav>
                <NavItem to="/" content={"RentAVan"} className="logo" />

                <ul className={`nav-links ${isMenuOpen ? "open" : ""} ${isClosing ? "closing" : ""}`}>
                    <li><NavItem to={`/`} content={"Camping-car"} onClick={() => {
                        handleChangeType("camping-car")
                        handleNavClick
                    }} /></li>
                    <li><NavItem to={`/`} content={"Van"} onClick={() => {
                        handleChangeType("van")
                        handleNavClick
                    }} /></li>
                    <li className='profile-menu'>
                        {
                            isAuthenticated ?
                                <>
                                    <NavItem to={`/profile`} content={"Mon espace"} onClick={handleNavClick} />
                                    <ul className="dropdown">
                                        <li><NavItem to={`/profile`} content={"Mon profil"} onClick={handleNavClick} /></li>
                                        <li><NavItem to={`/profile/order`} content={"Mes Réservations"} onClick={handleNavClick} /></li>
                                        <li><NavItem to={`/profile/product`} content={"Mes Véhicules"} onClick={handleNavClick} /></li>
                                        <li><NavItem to={`/profile/mailbox`} content={"Messagerie"} onClick={handleNavClick} /></li>
                                        <li><NavItem to={`/profile/settings`} content={"Paramètres"} onClick={handleNavClick} /></li>
                                        <li><NavItem to={`/profile/logout`} content={"Se Déconnecter"} onClick={handleNavClick} /></li>
                                    </ul>
                                </>
                                :
                                <>
                                    <NavItem to={`/login`} content={"Mon espace"} onClick={handleNavClick} />
                                    <ul className="dropdown">
                                        <li><NavItem to={`/login`} content={"Se Connecter"} onClick={handleNavClick} /></li>
                                        <li><NavItem to={`/register`} content={"S'inscrire"} onClick={handleNavClick} /></li>
                                    </ul>
                                </>
                        }
                    </li>
                </ul>
                <div className={`menu-hamburger ${isBurgerActive ? "active" : ""}`} id="burger-menu" onClick={handleClick}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </nav>
        </header>
    )
}