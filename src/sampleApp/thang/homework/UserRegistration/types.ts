export interface User {
  id: string;
  fullName: string;
  email: string;
  address: string;
  city: string;
  country: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  address?: string;
  city?: string;
  country?: string;
}