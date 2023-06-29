import { Route, Routes } from "react-router-dom"

import RegisterPage from "../pages/Register"
import LoginPage from "../pages/Login"
import DashboardPage from "../pages/Dashboard"
import ProtectedRoutes from "./ProtectedRoutes"
import PublicRoutes from "./PublicRoutes"

function RoutesMain() {
    return(
        <Routes>
            <Route element={<PublicRoutes/>}>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
            </Route>
            
            <Route element={<ProtectedRoutes/>}>
                <Route path="/dashboard" element={<DashboardPage/>}/>
            </Route>
        </Routes>
    )
}

export default RoutesMain
