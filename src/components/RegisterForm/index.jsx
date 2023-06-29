import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerFormShema } from "./registerFormShema"

import { Input } from "../Input"
import { Select } from "../Select"
import { StyledButton } from "../../styles/buttons"

import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

function RegisterForm() {
    const { userRegister } = useContext(UserContext)

    const { 
        register, 
        handleSubmit, 
        formState: { errors }
    } = useForm({
        resolver: zodResolver(registerFormShema)
    })

    const submit = (formData) => {
        userRegister(formData)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            
            <Input
                label="Nome"
                type="text"
                placeholder="Digite aqui seu nome"
                {...register("name")}
            />
            {errors.name ? <p>{errors.name.message}</p> : <p></p>}

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

            <Input
                label="Confirmar Senha"
                type="password"
                placeholder="Digite novamente sua senha"
                {...register("confirm")}
            />
            {errors.confirm ? <p>{errors.confirm.message}</p> : <p></p>}

            <Input
                label="Bio"
                type="text"
                placeholder="Fale sobre você"
                {...register("bio")}
            />
            {errors.bio ? <p>{errors.bio.message}</p> : <p></p>}

            <Input
                label="Contato"
                type="text"
                placeholder="Opção de contato"
                {...register("contact")}
            />
            {errors.contact ? <p>{errors.contact.message}</p> : <p></p>}

            <Select {...register("course_module")} label="Selecionar módulo">
                <option value="">Selecione um módulo</option>
                <option value="Primeiro módulo  (Introdução ao Frontend)">m1</option>
                <option value="Segundo módulo (Aprofundamento no Frontend)">m2</option>
                <option value="Terceiro módulo (Conclusão do Frontend)">m3</option>
                <option value="Quarto módulo (Introdução ao Backend)">m4</option>
                <option value="Quinto módulo (Conclusão do Backend)">m5</option>
            </Select>
            {errors.course_module ? <p>{errors.course_module.message}</p> : <p></p>}

            <StyledButton type="submit">Cadastrar</StyledButton>
        </form>
    )
}

export default RegisterForm
