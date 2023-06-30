import { z } from "zod";

export const createTechSchema = z.object({
   content: z
      .string()
      .nonempty("A mensagem é obrigatória")
      .min(10, "A mensagem precisa conter pelo menos 10 caracteres."),
});