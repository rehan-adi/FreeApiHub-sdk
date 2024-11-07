export interface User {
  id: string;
  gender: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  phone?: string;
  age: number;
  streetNumber: number;
  streetName?: string;
  city: string;
  state: string;
  country: string;
  postcode: number;
  picture: string;
  nationality?: string;
}
