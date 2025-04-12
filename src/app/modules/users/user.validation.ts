import { z } from 'zod';

const createUserValidationSchema = z.object({
  body: z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string(),
    status: z.enum(['active', 'deactivate']).default('deactivate'),
    role: z.enum(['customer', 'admin']).default('customer'),
  }),
});
const UpdateUserValidationSchema = z.object({
  body: z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().email().optional(),
    password: z.string().optional(),
    status: z.enum(['active', 'deactivate']).optional().default('deactivate'),
    role: z.enum(['customer', 'admin']).optional().default('customer'),
  }),
});

export const UservalidationSchema = {
  createUserValidationSchema,
  UpdateUserValidationSchema,
};
