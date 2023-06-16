import { z } from "zod"

export const registerFormShema = z.object({
    name: z
        .string()
        .nonempty("Nome é obrigatório"),
    email: z
        .string()
        .nonempty("O e-mail é obrigatório")
        .email("Digite um e-mail válido"),
    password: z
        .string()
        .nonempty("Cadastre uma senha")
        .min(8, "A senha precisa conter pelo menos 8 caracteres")
        .regex(/(?=.*?[A-Z])/, "É necessario pelo menos uma letra maiúscula")
        .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma caracter minúsculo")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
        .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário ao menos um caractere especial"),
    confirm: z
        .string()
        .nonempty("Confirme a senha"),
    bio: z
        .string()
        .nonempty("campo obrigatório")
        .min(6, "A bio precisa conter pelo menos 6 caracteres"),
    contact: z
        .string()
        .nonempty("campo obrigatório"),
    course_module: z
        .string()
        .nonempty("campo obrigatório")
}).refine(({ password, confirm }) => password === confirm, {
            message: "As senhas não correspondem",
            path: ["confirm"],
        })
