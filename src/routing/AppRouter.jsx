import React, { useContext } from "react";
import { Routes, Route, NavLink, BrowserRouter, defer } from "react-router-dom";
import Inicio from "../components/Inicio";
import Acerca from "../components/Acerca";
import Articulos from "../components/Articulos";
import Contacto from "../components/Contacto";
import Login from "../components/Login";
import Error404 from "../components/Error404";
import { PruebaContext } from "../context/PruebasContext";
import UserPage from "../components/UserPage";

export default function AppRouter () {

    const {usuario, setUsuario} = useContext(PruebaContext)

    const cerrarSesion = () => {
        setUsuario(prevUser => ({
            ...prevUser,
            username: null
        }))
    }

    return (
        <BrowserRouter>
            <header className="header">
                <h3>Curso React. UseContext y React Router</h3>
                <nav className="nav-header">
             
                <NavLink className="header-link" to="/">Inicio</NavLink>
                <NavLink className="header-link" to="/Acerca">Acerca de</NavLink>
                <NavLink className="header-link" to="/Articulos">Articulos</NavLink>
                <NavLink className="header-link" to="/Contacto">Contacto</NavLink>

                {usuario.username != null ? (
                    <NavLink className="header-link" to="/UserPage">{usuario.username}</NavLink>
                ) : (
                    <NavLink className="header-link" to="/Login">Identificate</NavLink>
                )
                }
                
                {usuario.username !=null && (
                    <button onClick={cerrarSesion}>Cerrar sesion</button>
                )}
                
                </nav>
            </header>
            
            <main className="main">
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/inicio" element={<Inicio/>} />
                <Route path="/Acerca" element={<Acerca/>} />
                <Route path="/Articulos" element={<Articulos/>} />
                <Route path="/Contacto" element={<Contacto/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/UserPage" element={<UserPage/>} />
                <Route path="*" element={<Error404/>} />
            </Routes>
            </main>
        </BrowserRouter>

    )

}