import { PageMeta } from "@atoms/PageMeta";
import { VehicleCard } from "@molecules/VehicleCard";

const data = [
    { id: '1', brand: "Ford", model: "Transit", totalPrice: 1000, description: "A reliable van for all your transport needs." },
    { id: '2', brand: "Mercedes", model: "Sprinter", totalPrice: 1500, description: "A spacious van with modern features." },
    { id: '3', brand: "Volkswagen", model: "California", totalPrice: 2000, description: "A stylish camper for your adventures." }
]

export function Result() {

    return (
        <div className="page">
            <PageMeta
                title="RentAVan - Résultats de recherche"
                description="Explorez les véhicules disponibles selon vos critères de recherche."
            />

            {data.map(vehicle => (
                <VehicleCard key={vehicle.id} type="result" vehicle={vehicle} />
            ))}
        </div>
    );
}