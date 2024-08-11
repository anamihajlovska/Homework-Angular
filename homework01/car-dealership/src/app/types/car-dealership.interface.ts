export interface Car {
  id: string;
  description: string; // e.g. Како нова, баба ја возела, etc.
  price: number; // e.g. 100.000, 200.000, etc.
  images: string[]; // array of image URLs
  brand: string; // e.g. BMW, Mercedes, Audi, etc. (or enum)
  model: string; // e.g. X5, X7, S8, etc.
}
