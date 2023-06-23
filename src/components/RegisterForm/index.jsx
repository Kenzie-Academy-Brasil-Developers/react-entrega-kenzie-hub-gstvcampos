import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../Input"
import { registerFormShema } from "./registerFormShema"
import { Select } from "../Select"
import { StyledButton } from "../../styles/buttons"

/*

POST /users
{
    "email": "johndoe@email.com",
    "password": "123456",
    "name": "John Doe",
    "bio": "Lorem ipsum dolor emet",
    "contact": "linkedin/in/johndoe",
    "course_module": "Segundo Módulo (Frontend avançado)"
  }

*/

function RegisterFrom() {
    const { 
        register, 
        handleSubmit, 
        formState: { errors }
    } = useForm({
        resolver: zodResolver(registerFormShema)
    })

    const submit = (formData) => {
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
                label="Nome"
                type="text"
                placeholder="Digite aqui seu nome"
                {...register("name")}
            />

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

            <Input
                label="Confirmar Senha"
                type="password"
                placeholder="Digite novamente sua senha"
                {...register("confirm")}
            />

            <Input
                label="Bio"
                type="text"
                placeholder="Fale sobre você"
                {...register("bio")}
            />

            <Input
                label="Contato"
                type="text"
                placeholder="Opção de contato"
                {...register("contact")}
            />

            {/* <Select {...register("course_module")} error={erros.course_module} label="Selecionar módulo">
                <option value="">Primeiro Módulo</option>
                <option value="">Primeiro Módulo</option>
                <option value="">Primeiro Módulo</option>
            </Select> */}

            <StyledButton type="submit">Cadastrar</StyledButton>
        </form>
    )
}

export default RegisterFrom
