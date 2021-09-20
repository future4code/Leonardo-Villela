import React from "react";
import {
    useHistory,
  } from "react-router-dom";

function HomePage() {
    const history = useHistory()

    const goToAboutPage = () => {
        history.push("/trips/list")
    }

    const goToAdminHomePage = () => {
        history.push("/login")
    }

    return (
       <div>
           <button onClick={goToAboutPage}>Ir para Lista de Viagens</button>
           <button onClick={goToAdminHomePage}>Área de admin</button>

       </div>
    )



}

export default HomePage;