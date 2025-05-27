import { ReactNode } from "react";
import { Link } from "react-router-dom";

export const TermsAndPrivacy: ReactNode = (
  <>
    J'accepte les{" "}
    <Link to="/conditions-utilisation" className="text-link">conditions d'utilisation</Link> et la{" "}
    <Link to="/politique-confidentialite" className="text-link">politique de confidentialité</Link>.
  </>
)