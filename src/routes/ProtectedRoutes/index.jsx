import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { Outlet, Navigate } from "react-router-dom"

function ProtectedRoutes() {
    const { user } = useContext(UserContext)

    return user ? <Outlet/> : <Navigate to="/"/>
}

export default ProtectedRoutes