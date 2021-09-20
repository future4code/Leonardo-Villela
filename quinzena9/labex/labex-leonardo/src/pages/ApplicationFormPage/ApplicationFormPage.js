import React from "react";
import {
    useHistory,
  } from "react-router-dom";
import styled from "styled-components";


function ApplicationFormPage() {
    const Container = styled.div `
        display: flex; 
        flex-direction: column;
        
    
    
    `

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <Container>
        <p>Inscrever-se para uma viagem: </p>
        <form>
            <select>
            <option value disabled selected>Escolha uma Viagem</option>
            </select>
            <input type="text" name="name" placeholder="Insira seu nome" ></input>
            <input type="number" name="age" placeholder="Idade" required min="18" ></input>
            <input type="email" name="email" placeholder="Insira seu email" ></input>


            

        </form>
        <button onClick={goBack}>Voltar</button>
        </Container>
    )



}

export default ApplicationFormPage;