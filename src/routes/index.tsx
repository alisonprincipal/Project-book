import { Route, Routes } from "react-router-dom"
import { DashBoard } from "../pages/Dashboard"
import { HomePage } from "../pages/HomePage"
import { Login } from "../pages/Login"
import { NotFound } from "../pages/NotFound"
import { Register } from "../pages/Register"

export const MainRout =()=>{
    return(        
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashboard" element={<DashBoard/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>      
    )
}