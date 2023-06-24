import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../Input"
import { loginFormShema } from "./loginFormShema"
import { StyledButton, StyledLink } from "../../styles/buttons"
import { StyledHeadline } from "../../styles/typography"
import { useNavigate } from "react-router-dom"

import { api } from "../../services/api"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function LoginFrom() {
    const navigate = useNavigate()
 
    const { 
        register, 
        handleSubmit, 
        formState: { errors }
    } = useForm({
        resolver: zodResolver(loginFormShema)
    })

    const userLogin = async (formData) => {
        try {
            const {data} = await api.post('/sessions', formData)
            localStorage.setItem("@TOKEN", JSON.stringify(data.token))
            localStorage.setItem("@USER", JSON.stringify(data.user))
            navigate("/dashboard")
        } catch (error) {
            toast.error('login ou senha inválidos', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
    }

    const submit = (formData) => {
        userLogin(formData)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
                label="Email"
                type="text"
                placeholder="Digite aqui seu email"
                {...register("email")}
            />
            {errors.email ? <p>{errors.email.message}</p> : <p></p>}

            <Input
                label="Senha"
                type="password"
                placeholder="Digite aqui sua senha"
                {...register("password")}
            />
            {errors.password ? <p>{errors.password.message}</p> : <p></p>}

            <StyledButton type="submit">Entrar</StyledButton>

            <StyledHeadline fontStyle="bold">Ainda não possui uma conta?</StyledHeadline>

            <StyledLink
                to="/register"
            >
                Cadastre-se
            </StyledLink>
            <ToastContainer/>
        </form>
    )
}

export default LoginFrom
