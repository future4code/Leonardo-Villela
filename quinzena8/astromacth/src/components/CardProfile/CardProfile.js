import React from "react";
import styled from "styled-components";

const CartaoImagem = styled.img `
        width: 100px;
        height: 150px;
    `

const CardProfile = (props) => {
    return (
        <div>
     {      props.informacoesMatches.map((matches) => {
        return (
            <div>
            <p>{matches.name}</p>
            <CartaoImagem src={matches.photo}></CartaoImagem>
           </div>  
        )
    })
    }
        </div>
    )
}

export default CardProfile;