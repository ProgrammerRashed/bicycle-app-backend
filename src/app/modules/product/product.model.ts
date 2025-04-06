import { model, Schema } from 'mongoose';
import { TProduct } from './product.interface';

const Productschema = new Schema<TProduct>({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Number, required: true },
  quantity: { type: Number, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  miles: { type: Number, required: true },
  transmission: { type: String, required: true },
  fuel: { type: String, required: true },
  seats: { type: Number, required: true },
  available: { type: Boolean, required: true },
  reviews: { type: Number, required: true },
});

export const ProductModel = model<TProduct>('Products', Productschema);
