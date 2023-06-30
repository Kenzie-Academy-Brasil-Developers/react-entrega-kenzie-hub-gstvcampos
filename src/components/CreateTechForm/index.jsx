import { useContext } from "react";
import { TechContext } from "../../providers/TechContext"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createTechSchema } from "./createTechSchema"


function AddTechForm() {
    const { createTech } = useContext(TechContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(createTechSchema)
    })

    const submit = async (formData) => {
        await createTech(formData)
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)} noValidate>
            <input label="Nome" {...register("title")} error={errors.content} />
            <select label="Selecionar status" name="status" id="" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </select>
            <button>
                Cadastrar tecnologia
            </button>
        </form>
    )
}

export default AddTechForm
