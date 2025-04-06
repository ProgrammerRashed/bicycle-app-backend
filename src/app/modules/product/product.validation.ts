import { z } from 'zod';

const CreateProductValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    brand: z.string(),
    model: z.string(),
    description: z.string(),
    image: z.string(),
    rating: z.number().min(0).max(5),
    quantity: z.number().int().min(0),
    category: z.string(),
    price: z.number().min(0),
    available: z.boolean(),
    location: z.string(),
    miles: z.number().min(0),
    transmission: z.string(),
    fuel: z.string(),
    seats: z.number(),
    reviews: z.number(),
  }),
});

const UpdateProductValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    brand: z.string().optional(),
    model: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    rating: z.number().min(0).max(5).optional(),
    quantity: z.number().int().min(0).optional(),
    category: z.string().optional(),
    price: z.number().min(0).optional(),
    available: z.boolean().optional(),
    location: z.string().optional(),
    miles: z.number().min(0).optional(),
    transmission: z.string().optional(),
    fuel: z.string().optional(),
    seats: z.number().optional(),
    reviews: z.number().optional(),
  }),
});

export const productValidationSchema = {
  CreateProductValidationSchema,
  UpdateProductValidationSchema,
};
