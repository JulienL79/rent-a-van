export interface IVehicleCardResult {
    id: string,
    picture: string | null
    brand: string,
    model: string,
    description: string,
    totalPrice: number,
}

export interface IVehicleCardProfile {
    id: string,
    picture: string | null
    brand: string,
    model: string,
    category: string,
}

export interface IBookingCardOwner {
    id: string,
    vehiclePlate: string,
    renterName: string,
    startDate: string,
    endDate: string,
    amount: number,
    status: 'pending' | 'confirmed' | 'cancelled' |'finished',
}

export interface IBookingCardRenter {
    id: string,
    ownerName: string,
    startDate: string,
    endDate: string,
    amount: number,
    status: 'pending' | 'confirmed' | 'cancelled' |'finished',
}

export interface IVehicleCardPropsResult {
    type: 'result',
    data: IVehicleCardResult,
}

export interface IVehicleCardPropsProfile {
    type: 'my-vehicles',
    data: IVehicleCardProfile,
    onDelete: () => void
}

export interface IBookingCardPropsOwner {
    type: 'owner',
    data: IBookingCardOwner,
}

export interface IBookingCardPropsRenter {
    type: 'renter',
    data: IBookingCardRenter,
}
