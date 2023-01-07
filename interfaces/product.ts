export interface ProductInterface {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
  category: string;
  availibility: Availibility;
}
export enum Availibility {
  SOLD = "sold",
  AVAILABLE = "available",
}
