import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});
  console.log(props.pokemon);
  
  
  useEffect(() => {
    pegaPokemon();
  }, []);


  const pegaPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.pokemon}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const caracteristicas = pokemon;

  return (
    
    <div>
      <p>{caracteristicas.name}</p>
      <p>{caracteristicas.weight} Kg</p>
      {caracteristicas.types && <p>{caracteristicas.types[0].type.name}</p>}
      {caracteristicas.sprites && (
        <img
          src={caracteristicas.sprites.front_default}
          alt={caracteristicas.name}
        />
      )}
    </div>
  );
}
