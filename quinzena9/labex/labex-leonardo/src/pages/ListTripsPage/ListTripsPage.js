import React from "react";
import {
    useHistory,
  } from "react-router-dom";


function ListTripPage() {
    const history = useHistory()

    const goBack = ()  => {
        history.goBack()
    }

    
    const goToApplicationFormPage = ()  => {
        history.push("/trips/application")
    }

    return (
        <div>

        <p>Lista de Viagens</p>

        <button onClick={goBack}>Retornar</button>
        <button onClick={goToApplicationFormPage}>Inscrever-se</button>

        
        </div>
    )
}

export default ListTripPage;