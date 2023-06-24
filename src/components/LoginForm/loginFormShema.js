import { z } from "zod"

export const loginFormShema = z.object({
    email: z
        .string()
        .nonempty("O e-mail é obrigatório"),
    password: z
        .string()
        .nonempty("Senha obrigatório")
})
