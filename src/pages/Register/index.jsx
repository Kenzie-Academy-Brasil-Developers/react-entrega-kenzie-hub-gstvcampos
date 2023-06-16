import { useForm } from "react-hook-form"
import { Input } from "../../components/Input"


function RegisterPage() {
    const { register, handleSubmit } = useForm()

    const submit = (formData) => {
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
                label="Nome"
                type="text"
                {...register("")}
                error={erros.author}
            />
        </form>
    )
}

export default RegisterPage
