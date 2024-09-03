export interface User {
  role: string;
  email: string;
  password: string;
  id?: string; // Optional, as the server will generate it
}
