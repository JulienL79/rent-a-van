interface IVehicleCardResult {
    id: string,
    brand: string,
    model: string,
    description: string,
    totalPrice: number,
}

interface IVehicleCardProfile {
    id: string,
    brand: string,
    model: string,
    category: string,
}

export interface IVehicleCardPropsResult {
    type: 'result',
    vehicle: IVehicleCardResult,
}

export interface IVehicleCardPropsProfile {
    type: 'profile',
    vehicle: IVehicleCardProfile,
}
