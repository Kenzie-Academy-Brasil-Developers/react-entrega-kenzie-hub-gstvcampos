import { z } from "zod"

export const loginFormShema = z.object({
    email: z
        .string()
        .nonempty("O e-mail é obrigatório")
        .email("Digite um e-mail válido"),
    password: z
        .string()
        .nonempty("Senha obrigatório")
        .min(8, "A senha precisa conter pelo menos 8 caracteres")
})
