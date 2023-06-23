import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../Input"
import { loginFormShema } from "./loginFormShema"
import { StyledButton, StyledLink } from "../../styles/buttons"
import { StyledHeadline } from "../../styles/typography"

// POST /sessions - FORMATO DA REQUISIÇÃO

// {
//   "email": "johndoe@email.com",
//   "password": "123456"
// }


function LoginFrom() {
    const { 
        register, 
        handleSubmit, 
        formState: { errors }
    } = useForm({
        resolver: zodResolver(loginFormShema)
    })

    const submit = (formData) => {
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
                label="Email"
                type="text"
                placeholder="Digite aqui seu email"
                {...register("email")}
            />

            <Input
                label="Senha"
                type="password"
                placeholder="Digite aqui sua senha"
                {...register("password")}
            />

            <StyledButton type="submit">Entrar</StyledButton>

            <StyledHeadline fontStyle="bold">Ainda não possui uma conta?</StyledHeadline>

            <StyledLink colorStyle="grey"
                to="/register"
            >
                Cadastre-se
            </StyledLink>
        </form>
    )
}

export default LoginFrom
