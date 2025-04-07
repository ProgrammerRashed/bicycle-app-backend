import { z } from 'zod';

const CreateProductValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    brand: z.string(),
    price: z.number().min(0),
    category: z.string(),
    stock: z.number().int().min(0),
    model: z.string(),
    quantity: z.number().int().min(0),
    image_gallery: z.array(z.string()),
    spacifications: z.array(z.string()),
    reviews: z.number().min(0),
    key_features: z.array(z.string()),
  }),
});

const UpdateProductValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    brand: z.string().optional(),
    price: z.number().min(0).optional(),
    category: z.string().optional(),
    stock: z.number().int().min(0).optional(),
    model: z.string().optional(),
    quantity: z.number().int().min(0).optional(),
    image_gallery: z.array(z.string()).optional(),
    spacifications: z.array(z.string()).optional(),
    reviews: z.number().min(0).optional(),
    key_features: z.array(z.string()).optional(),
  }),
});

export const productValidationSchema = {
  CreateProductValidationSchema,
  UpdateProductValidationSchema,
};
