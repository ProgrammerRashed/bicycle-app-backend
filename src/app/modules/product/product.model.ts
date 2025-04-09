import { model, Schema } from 'mongoose';
import { TProduct } from './product.interface';

const Productschema = new Schema<TProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  stock: { type: Number, required: true },
  model: { type: String, required: true },
  quantity: { type: Number, required: true },
  speacial_category: { type: [String], required: true },
  image_gallery: { type: [String], required: true },
  in_stock: { type: Boolean, required: true },
  spacifications: {
    type: [
      {
        name: { type: String, required: false },
        value: { type: String, required: false },
      }
    ],
    required: false,
  },
  reviews: { type: Number, required: true },
  key_features: { type: [String], required: true }
});

export const ProductModel = model<TProduct>('Products', Productschema);
