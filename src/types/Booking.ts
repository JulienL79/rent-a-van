export type BookingRegisterPayload = {
	ownerId: string;
	vehicleId: string;
	optionId?: string;
	startDate: Date;
	endDate: Date;
	renterAddressStreet: string;
	renterAddressCity: string;
	renterAddressZip: string;
	renterAddressCountry: string;
	insuranceContract?: string;
};

export type BookingUpdatePayload = {
	optionId?: string;
	discountCode?: string;
	startDate: Date;
	endDate: Date;
	renterAddressStreet: string;
	renterAddressCity: string;
	renterAddressZip: string;
	renterAddressCountry: string;
	status: "pending" | "confirmed" | "cancelled" | "finished";
	ownerAddressStreet: string;
	ownerAddressCity: string;
	ownerAddressZip: string;
	ownerAddressCountry: string;
	insuranceContract?: string;
	updatedAt?: Date;
};

export type TAdminBookingData = {
	id: string;
	ownerId: string;
	renterId: string;
	vehicleId: string;
	createdAt: Date;
	status: string;
	amount: string;
};

export type TAdminBookingRow = {
	id: string;
	createdAt: Date;
	status: string;
	amount: string;
};
