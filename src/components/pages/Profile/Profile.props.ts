export interface IProfileMetaData {
    page: 'home' | 'bookings' | 'vehicles' | 'settings' | 'mailbox';
    titlePage: string;
    title: string;
    description: string;
}

export interface IUserDetails {
    firstname: string;
    lastname: string;
    birthdate: string;
    email: string;
    phoneNumber: string;
    addressStreet: string;
    addressCity: string;
    addressZip: string;
    addressCountry: string;
    profilePicture: string | null;
    drivingLicense: string;
    createdAt: string;
}