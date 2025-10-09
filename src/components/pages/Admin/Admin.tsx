import { PageMeta } from "@atoms/PageMeta"
import { Aside } from "@molecules/Aside"
import { adminMetaDatas } from "./AdminMetaData"
import { useParams } from "react-router-dom";
import { IAdminMetaData } from "./Admin.props";
import { useEffect, useState } from "react";
import './Admin.css';
import { AuthRedirector } from "@routes/AuthRedirector";

export const Admin = () => {
    const { page } = useParams();
    const [pageMetaData, setPageMetaData] = useState<IAdminMetaData>(adminMetaDatas.find(meta => meta.page === (page || 'home'))!);

    // Charger les métadonnées de la page en fonction du paramètre d'URL
    useEffect(() => {
        const metaData = adminMetaDatas.find(meta => meta.page === (page));

        if (metaData) {
            setPageMetaData(metaData);
        }
    }, [page]);
    return (
        <div className="page admin-page">
            <PageMeta
                title="RentAVan - Espace Administrateur"
                description="Interface d’administration de RentAVan pour gérer les utilisateurs, les réservations et les contenus de la plateforme."
            />

            <AuthRedirector />
            <Aside page="admin" active={pageMetaData.page} />

            <section className="content">
                <h1>{pageMetaData.titlePage}</h1>
            </section>
        </div>
    )
}