import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"
import { api } from "../services/api"

export const TechContext = createContext

export const TechProvider = ({ children }) => {
    const [techList, setTechList] = useState([])
    
    useEffect(() => {
        const techData = async () => {
            try {
                const data = await api.get("/tech")
                setTechList()
            } catch (error) {
                console.log(error)
            }   
        }
    })

    return(
        <TechContext.Provider value={{}}>
            {children}
        </TechContext.Provider>
    )
}