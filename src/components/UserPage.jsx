import React, { useContext } from "react";
import { PruebaContext } from "../context/PruebasContext";

export default function UserPage () {

    const {usuario} = useContext(PruebaContext)

    return(
        <>
            {usuario.username != null ? (
                
                <h2>Este es el perfil de {usuario.username}</h2>
                
            ) : (
                <>

                <h2>Debes de iniciar sesión para mostrar el perfil</h2>
                <p>Estamos encantados de tenerte aquí</p>
                </>
            )
            }
        </>
    )
}