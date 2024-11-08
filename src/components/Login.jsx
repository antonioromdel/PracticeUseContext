import React, { useContext } from "react";
import { PruebaContext } from "../context/PruebasContext";
import UserPage from "./UserPage";

export default function Login (){

    const {usuario, setUsuario} = useContext(PruebaContext)

    const createUser = e => {
        e.preventDefault()
        let user = e.target.username.value
        console.log(user)
        setUsuario(prevUser => ({
            ...prevUser,
            username: user
        }))
        e.target.username.value = ""
    }

    return(
        <>

            {
                usuario.username != null ? (
                    <UserPage />

                ) : (
                    <>
                        <h1>Esta es la página de Login</h1>
                        <form onSubmit={createUser}>

                            <input name="username" type="text" placeholder="Introduce tu usuario" />
                            <input type="submit" />

                        </form>
                    </>
                )
            }
            
        </>
    )

}