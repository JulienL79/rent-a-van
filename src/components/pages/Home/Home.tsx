import { ArticleCardContainer } from "@organisms/ArticleCardContainer";
import { campingcarArticles, vanArticles } from "./HomeArticleData";
import { homeFormData } from "./HomeFormData";
import { useEffect, useState, useMemo } from "react";
import { useFilterStore } from "@store/useFilterStore";
import { Form } from "@organisms/Form";
import { TestimonialSlider } from "@atoms/TestimonialSlider";
import { reviews } from "./HomeReviewData";
import './Home.css'
import { FormSubmitResult } from "../../../types/FormSubmitResult";
import { fetchCityCoordinates } from "@api/addressApi";
import { useModalStore } from "@store/useModalStore";
import { RawSearchPayload } from "../../../types/Search";
import { searchVehicles } from "@api/searchApi";
import { PageMeta } from "@atoms/PageMeta";

export const Home = () => {
    const [articles, setArticles] = useState(campingcarArticles)
    const { vehicleType, startDate, endDate, radius, locationCity, locationCode } = useFilterStore()
    const { setMessage } = useModalStore()

    const handleSubmit = async (): Promise<FormSubmitResult> => {
        try {
            console.log(locationCode)
            if (
                !startDate || !endDate ||
                !radius || !locationCode
            ) {
                setMessage({
                    content: "Veuillez compléter tous les champs",
                    type: "error",
                });
                throw new Error("Veuillez compléter tous les champs");
            }

            const coords = await fetchCityCoordinates(locationCode);
            console.log(coords)
            console.log(vehicleType)

            const payload: RawSearchPayload = {
                startDate: startDate?.toISOString(),
                endDate: endDate?.toISOString(),
                radius: radius.toString(),
                lat: coords.data.lat.toString(),
                lon: coords.data.lon.toString(),
                type: vehicleType
            };

            const searchResult = await searchVehicles(payload)
            console.log(searchResult)

            return { ok: true, datas: searchResult?.data };
        } catch (error: any) {
            if (error.data && typeof error.data === "object") {
                return { ok: false, errors: error.data };
            }

            return { ok: false, errors: {} };
        }
    }

    const formDataWithStoreValues = useMemo(() => {
        return {
            ...homeFormData,
            onSubmit: handleSubmit,
            fields: homeFormData.fields.map((field) => {
                let value: string | number = "";

                switch (field.id) {
                    case "startDate":
                        value = startDate ? startDate.toISOString().split("T")[0] : "";
                        break;
                    case "endDate":
                        value = endDate ? endDate.toISOString().split("T")[0] : "";
                        break;
                    case "city":
                        value = locationCity ?? "";
                        break;
                    case "radius":
                        value = radius ?? 50;
                        break;
                }

                return {
                    ...field,
                    value,
                };
            }),
        }
    }, [startDate, endDate, locationCity, radius, locationCode]);

    useEffect(() => {
        setArticles(vehicleType === "van" ? vanArticles : campingcarArticles)
    }, [vehicleType])

    return (
        <div className="page home">
            <PageMeta
                title="RentAVan - Accueil"
                description="Bienvenue sur RentAVan, votre plateforme de location de vans partout en France."
            />

            <div className="home-search">
                <Form {...formDataWithStoreValues} />
            </div>
            <ArticleCardContainer {...articles} />
            <TestimonialSlider testimonials={reviews} />
        </div>
    )
}