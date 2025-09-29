import { PageMeta } from "@atoms/PageMeta";
import { VehicleCard } from "@molecules/VehicleCard";

const data = [
    { id: '1', brand: "Ford", model: "Transit", category: "Van" },
    { id: '2', brand: "Mercedes", model: "Sprinter", category: "Van" },
    { id: '3', brand: "Volkswagen", model: "California", category: "Camper" }
]

export function ProfileVehicle() {

    return (
        <div className="page">
            <PageMeta
                title="RentAVan - Mes véhicules"
                description="Retrouvez tous les véhicules que vous avez mis en ligne, gérez vos annonces et suivez leurs performances."
            />
            {data.map(vehicle => (
                <VehicleCard key={vehicle.id} type="profile" vehicle={vehicle} />
            ))}
        </div>
    );
}