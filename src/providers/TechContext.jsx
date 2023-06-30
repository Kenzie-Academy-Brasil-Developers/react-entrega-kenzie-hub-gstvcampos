import { useEffect, createContext, useContext, useState } from "react"
import { api } from "../services/api"
import { UserContext } from "./UserContext"

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
    const [techList, setTechList] = useState([])
    
    const { setLoading } = useContext(UserContext)

    /*{
    "title": "React",
    "status": "Iniciante"
    }*/

    const createTech = async ( formData ) => {
        try {
            setLoading(true)
            const token = localStorage.getItem("@TOKEN")
            const { data } = await api.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setTechList((techList) => [...techList, data])
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }  
    }

    const updateTech = async (formData, techId) => {
        try {
            setLoading(true)
            const token = localStorage.getItem("@TOKEN")
            const { data } = await api.put(`/users/techs/${techId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setTechList((techList) => techList.map(tech => {
                if(tech.id !== techId) {
                    return data
                } else {
                    return tech
                }
            }))
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }  
    }

    const deleteTech = async (techId) => {
        try {
            setLoading(true)
            const token = localStorage.getItem("@TOKEN")
            await api.delete(`/users/techs/${techId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setTechList((techList) => techList.filter(tech => {tech.id !== techId}))
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }  
    }

    return(
        <TechContext.Provider value={{ techList, createTech, updateTech, deleteTech }}>
            {children}
        </TechContext.Provider>
    )
}