import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

import { loginFormShema } from "./loginFormShema"

import { Input } from "../Input"

import { StyledButton, StyledLink } from "../../styles/buttons"
import { StyledHeadline } from "../../styles/typography"

import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

function LoginForm() {
    const { userLogin } = useContext(UserContext)

    const [loading, setLoading] = useState(false)

    const { 
        register, 
        handleSubmit, 
        formState: { errors }
    } = useForm({
        resolver: zodResolver(loginFormShema)
    })

    const submit = (formData) => {
        userLogin(formData, setLoading)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
                label="Email"
                type="text"
                placeholder="Digite aqui seu email"
                {...register("email")}
                disable={loading}
            />
            {errors.email ? <p>{errors.email.message}</p> : <p></p>}

            <Input
                label="Senha"
                type="password"
                placeholder="Digite aqui sua senha"
                {...register("password")}
                disable={loading}
            />
            {errors.password ? <p>{errors.password.message}</p> : <p></p>}

            <StyledButton type="submit" disable={loading}>
                {loading ? "Entrando" : "Entrar"}
            </StyledButton>

            <StyledHeadline fontStyle="bold">Ainda não possui uma conta?</StyledHeadline>

            <StyledLink
                to="/register"
            >
                Cadastre-se
            </StyledLink>
        </form>
    )
}

export default LoginForm
