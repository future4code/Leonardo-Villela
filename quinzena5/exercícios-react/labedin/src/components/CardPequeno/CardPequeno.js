import React from 'react';
import './CardPequeno.css'


function CardPequeno(props) {
    return (
        <div className="cardPequeno-container">
            <img src = {props.imagem} />
            <div>
                <h4>{props.info}</h4>
                <p>{props.texto}</p>
            </div>
        </div>
    )
}

export default CardPequeno;