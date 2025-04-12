import { Specification } from "../../interface/types";

export type TProduct = {
  name: string;
  description: string;
  brand: string;
  price: number;
  category: string;
  stock: number;
  model: string;
  special_category: string[];
  image_gallery: string[];
  in_stock: boolean;
  specifications: Specification[];
  reviews: number;
  key_features: string[];
};
