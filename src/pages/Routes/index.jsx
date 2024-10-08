import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { Login } from "../Login";
import { Register } from "../Register"

export function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/register" element={ <Register /> } />
            </Routes>
        </BrowserRouter>
    )
}