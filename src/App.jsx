import React, { useState } from "react"
import AppRouter from "./routing/AppRouter"
import { PruebaContext } from "./context/PruebasContext"

function App() {
  
  const [usuario, setUsuario] = useState({
    nombre: "Antonio Román",
    web: "antonioromanilusionista.com",
    username: null

  })

  return (
    <>
        <PruebaContext.Provider value={{usuario, setUsuario}}>

          <AppRouter />

        </PruebaContext.Provider>
    </>
  )
}

export default App
