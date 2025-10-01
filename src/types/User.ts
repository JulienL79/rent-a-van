export type UserRegisterPayload = {
  firstname: string;
  lastname: string;
  birthdate: Date;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  createdAt?: Date;
  drivingLicense?: string;
  addressStreet: string;
  addressCity: string;
  addressZip: string;
  addressCountry: string;
  termsAccepted: boolean;
};

export type UserUpdatePayload = {
  firstname: string;
  lastname: string;
  birthdate: Date;
  phoneNumber: string;
  drivingLicense?: string;
  addressStreet: string;
  addressCity: string;
  addressZip: string;
  addressCountry: string;
};

export type EmailPayload = {
  email: string;
};

export type UpdateCredentialsPayload = {
  email: string;
  password?: string;
  confirmPassword?: string;
  oldPassword: string;
};

export type ResetPasswordPayload = {
  password: string;
  confirmPassword: string;
};