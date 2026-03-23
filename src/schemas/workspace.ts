import { z } from "zod";

export const workspaceSchema = z.object({
  name: z
    .string()
    .min(3, "El nombre del workspace debe tener al menos 3 caracteres"),
});

export type WorkspaceInput = z.infer<typeof workspaceSchema>;
