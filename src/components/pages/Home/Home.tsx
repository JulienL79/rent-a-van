import { ArticleCardContainer } from "@organisms/ArticleCardContainer";
import { campingcarArticles, vanArticles } from "./HomeArticleData";
import { homeFormData } from "./HomeFormData";
import { useEffect, useState, useMemo } from "react";
import { useFilterStore } from "@store/useFilterStore";
import './Home.css'
import { Form } from "@organisms/Form";
import { TestimonialSlider } from "@atoms/TestimonialSlider";
import { reviews } from "./HomeReviewData";

export const Home = () => {
    const [articles, setArticles] = useState(campingcarArticles)
    const { vehicleType, startDate, endDate, radius, locationCity, setStartDate, setEndDate, setRadius, setLocationCity } = useFilterStore()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;

        switch (id) {
            case "startDate":
                setStartDate(new Date(value));
                break;
            case "endDate":
                setEndDate(new Date(value));
                break;
            case "city":
                setLocationCity(value);
                break;
            case "radius":
                setRadius(Number(value));
                break;
        }
    };


    const formDataWithStoreValues = useMemo(() => {
    return {
        ...homeFormData,
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
                onChange: handleChange,
                value,
            };
        }),
        // onSubmit: async () => {
        //     console.log("Recherche lancée avec les filtres du store");
        //     return { ok: true };
        // },
    }
}, [startDate, endDate, locationCity, radius]);


useEffect(() => {
    setArticles(vehicleType === "van" ? vanArticles : campingcarArticles)
}, [vehicleType])

return (
    <div className="page home">
        <div className="home-search">
            <Form {...formDataWithStoreValues} />
        </div>
        <ArticleCardContainer {...articles} />
        <TestimonialSlider testimonials={reviews}/>
    </div>
)
}