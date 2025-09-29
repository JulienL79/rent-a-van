import { NavItem } from "@atoms/NavItem"
import "./Footer.css"

export const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="app-footer">
            <p>&copy; 2025 RentAVan. Tous droits réservés.</p>
            <div className="footer-links">
                <NavItem to={`/legal`} content={"Mentions légales"} onClick={scrollToTop} />
                <NavItem to={`/terms`} content={"CGV"} onClick={scrollToTop} />
                <NavItem to={`/privacy`} content={"Politique de confidentialité"} onClick={scrollToTop} />
                <NavItem to={`/contact`} content={"Contact"} onClick={scrollToTop} />
            </div>
        </footer>
    )
}