import { useForm } from "react-hook-form"


function RegisterPage() {
    const { register, handleSubmit } = useForm()

    const submit = (event) => {
        event.preventDefault()

    }

    return (
        <form>
            <input type="text" />
        </form>
    )
}

export default RegisterPage
