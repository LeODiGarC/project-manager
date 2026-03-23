import { z } from "zod";

export const userSchema = z.object({
  email: z.string().email("Debe ser un correo válido"),
  name: z.string().optional(),
});

export type UserInput = z.infer<typeof userSchema>;