import { useEffect, useState } from "react"
import { createContext } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../services/api"
import { toast } from "react-toastify"

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)


    const navigate = useNavigate()
    
    const currentPath = window.location.pathname

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")

        const loadUser = async () => {
            try {
                setLoading(true)
                const { data } = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data)
                navigate(currentPath)
            } catch(error) {
                console.log(error)
                localStorage.removeItem("@TOKEN")
            } finally {
                setLoading(false)
            }
        }

        if(token) {
            loadUser()
        }
    }, [])


    const userLogin = async (formData) => {
        try {
            setLoading(true)
            const {data} = await api.post('/sessions', formData)
            localStorage.setItem("@TOKEN", data.token)
            setUser(data.user)
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
        } finally {
            setLoading(false)
        }
    }

    const userRegister = async (formData) => {
        try {
            setLoading(true)
            const {data} = await api.post('/users', formData)
            toast.success('Conta criada com sucesso', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            navigate("/")

        } catch (error) {
            toast.error(error.response.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })

        } finally {
            setLoading(false)
        }
    }

    const userLogout = () => {
        localStorage.removeItem("@TOKEN")
        setUser(null)
    }


    return (
        <UserContext.Provider value={{ user, setUser, userLogin, userLogout, userRegister, loading }}>
            {children}
        </UserContext.Provider>
    )
}