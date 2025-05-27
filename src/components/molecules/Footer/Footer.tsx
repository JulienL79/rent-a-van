import { NavItem } from "@atoms/NavItem"
import "./Footer.css"

export const Footer = () => {
    return (
        <footer className="app-footer">	
            <p>&copy; 2025 Locavan. Tous droits réservés.</p>
            <div className="footer-links">
                <NavItem to={`/mentions-legales`} content={"Mentions légales"}/>
                <NavItem to={`/cgv`} content={"CGV"}/>
                <NavItem to={`/politique-confidentialite`} content={"Politique de confidentialité"}/>
                <NavItem to={`/contact`} content={"Contact"}/>
            </div>
        </footer>
    )
}