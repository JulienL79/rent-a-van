import { IAsideProps } from "./Aside.props"
import { NavItem } from '@atoms/NavItem'
import './Aside.css'

export const Aside: React.FC<IAsideProps> = ({
    page,
    active
}) => {

    if(page === 'profile'){
        return (
            <aside className="sidebar">
                <h2>Menu</h2>
                <nav className="profile-nav">
                    <ul>
                        <li><NavItem to="/profile/home" content="Mon Profil" className={active === 'home' ? 'active' : ''} /></li>
                        <li><NavItem to="/profile/bookings" content="Réservations" className={active === 'bookings' ? 'active' : ''} /></li>
                        <li><NavItem to="/profile/vehicles" content="Véhicules" className={active === 'vehicles' ? 'active' : ''} /></li>
                        <li><NavItem to="/profile/mailbox" content="Messagerie" className={active === 'mailbox' ? 'active' : ''} /></li>
                        <li><NavItem to="/profile/settings" content="Paramètres" className={active === 'settings' ? 'active' : ''} /></li>
                        <li><NavItem to="/logout" content="Déconnexion" /></li>                          
                    </ul>
                </nav>
            </aside>
        )
    }
}