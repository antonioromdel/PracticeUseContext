import React, { useContext } from "react";
import { PruebaContext } from "../context/PruebasContext";
import { NavLink } from "react-router-dom";

export default function Inicio (){

    const {usuario, setUsuario} = useContext(PruebaContext)
    
    return(
        <>
            <h1>Esta es la página de inicio.</h1>
            <h2>Aprendiendo a usar React Router y useContext</h2>

            {
                usuario.username != null ? (
                    <p>Bienvenido, {usuario.username}</p>

                ) : (
                    <NavLink className="logueo" to="/Login">Identifícate</NavLink>
                )
            }

        </>
    )

}