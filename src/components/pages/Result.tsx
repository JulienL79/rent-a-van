import { PageMeta } from "@atoms/PageMeta";
import { Card } from "@molecules/Card";

const data = [
    { id: '1', brand: "Ford", model: "Transit", totalPrice: 1000, description: "A reliable van for all your transport needs.", picture: null },
    { id: '2', brand: "Mercedes", model: "Sprinter", totalPrice: 1500, description: "A spacious van with modern features.", picture: null },
    { id: '3', brand: "Volkswagen", model: "California", totalPrice: 2000, description: "A stylish camper for your adventures.", picture: null }
]

export function Result() {

    return (
        <div className="page">
            <PageMeta
                title="RentAVan - Résultats de recherche"
                description="Explorez les véhicules disponibles selon vos critères de recherche."
            />

            {data.map(vehicle => (
                <Card key={vehicle.id} type="result" data={vehicle} />
            ))}
        </div>
    );
}