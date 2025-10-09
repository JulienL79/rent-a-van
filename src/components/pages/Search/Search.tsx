import { PageMeta } from "@atoms/PageMeta";
import { Aside } from "@molecules/Aside";
import { useLocation, useParams } from "react-router-dom";
import { ISearchMetaData } from "./Search.props";
import { searchMetaDatas } from "./SearchMetaData";
import { useEffect, useState } from "react";
import { Result } from "./Result";

export function Search() {
    const { state } = useLocation();
    const { page } = useParams();
    const [pageMetaData, setPageMetaData] = useState<ISearchMetaData>(searchMetaDatas.find(meta => meta.page === (page || 'results'))!);
    const results = state?.results ?? [];


    // Charger les métadonnées de la page en fonction du paramètre d'URL
    useEffect(() => {
        const metaData = searchMetaDatas.find(meta => meta.page === (page));

        if (metaData) {
            setPageMetaData(metaData);
        }
    }, [page]);

    return (
        <div className="page">
            <PageMeta
                title={pageMetaData.title}
                description={pageMetaData.description}
            />

            <Aside page="results" />

            <section className="content">
                {page === "results" && <Result/>}
                {page === "vehicle" && <></>}
            </section>

        </div>
    );
}