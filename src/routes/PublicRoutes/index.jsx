import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { Outlet, Navigate } from "react-router-dom"

function PublicRoutes() {
    const { user } = useContext(UserContext)

    return !user ? <Outlet/> : <Navigate to="/dashboard"/>
}

export default PublicRoutes