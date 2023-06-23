import { Route, Routes } from "react-router-dom"

import RegisterPage from "../pages/Register"
import LoginPage from "../pages/Login"
import DashboardPage from "../pages/Dashboard"

function RountesMain() {
    return(
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/dashboard" element={<DashboardPage/>}/>
        </Routes>
    )
}

export default RountesMain