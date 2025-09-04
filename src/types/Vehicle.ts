export type VehicleRegisterPayload = {
  categoryId: string;
  brand: string;
  model: string;
  mileage: number;
  registrationDate: Date;
  registrationPlate: string;
  description: string;
  numberOfSeats: number;
  numberOfSleepingPlaces: number;
  length: string;
  height: string;
  weight: string;
  fuelType: "diesel" | "petrol" | "electric" | "hybrid" | "other";
  gearType: "manual" | "automatic";
  consumption: string;
  cityName: string;
  latCoordinates: string;
  lonCoordinates: string;
  insuranceNumber: string;
  insuranceExpirationDate: Date;
  basePrice: string; // transformé via `.toFixed(2)`
  isAvailable?: boolean;
  equipmentIds: string[];
  pictures: string[];
};

export type VehicleUpdatePayload = {
  categoryId: string;
  brand: string;
  model: string;
  mileage: number;
  registrationDate: Date;
  registrationPlate: string;
  description: string;
  numberOfSeats: number;
  numberOfSleepingPlaces: number;
  length: string;
  height: string;
  weight: string;
  fuelType: "diesel" | "petrol" | "electric" | "hybrid" | "other";
  gearType: "manual" | "automatic";
  consumption: string;
  cityName: string;
  latCoordinates: string;
  lonCoordinates: string;
  insuranceNumber: string;
  insuranceExpirationDate: Date;
  basePrice: string; // transformé via `.toFixed(2)`
  isAvailable?: boolean;
  equipmentIds?: string[];
};