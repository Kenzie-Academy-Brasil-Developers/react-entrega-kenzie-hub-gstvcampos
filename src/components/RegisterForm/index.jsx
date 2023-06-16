import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../Input"
import { registerFormShema } from "./registerFormShema"

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
    const { register, handleSubmit, formState: { erros },
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
                error={erros.name}
            />

            <Input
                label="Email"
                type="text"
                placeholder="Digite aqui seu email"
                {...register("email")}
                error={erros.email}
            />

            <Input
                label="Senha"
                type="password"
                placeholder="Digite aqui sua senha"
                {...register("password")}
                error={erros.password}
            />

            <Input
                label="Confirmar Senha"
                type="password"
                placeholder="Digite novamente sua senha"
                {...register("confirm")}
                error={erros.author}
            />

            <Input
                label="Bio"
                type="text"
                placeholder="Fale sobre você"
                {...register("bio")}
                error={erros.author}
            />

            <Input
                label="Contato"
                type="text"
                placeholder="Opção de contato"
                {...register("contact")}
                error={erros.author}
            />


            <button type="submit">Cadastrar</button>
        </form>
    )
}

export default RegisterFrom
