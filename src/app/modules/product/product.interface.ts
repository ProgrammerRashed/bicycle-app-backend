import { Specification } from "../../interface/types";

export type TProduct = {
  name: string;
    description: string;
    brand: string;
    price: number;
    category: string;
    stock: number;
    model: string;
    quantity: number;
    speacial_category: string[];
    image_gallery: string[];
    in_stock: boolean;
    spacifications: Specification[];
    reviews: number;
    key_features: string[];
};
