
import React, { useEffect, useState } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard";

function App() {

  const [pokeList, setPokelist] = useState([]);
  const [pokeName, setPokeName] = useState("");

  const fetchPokelist = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=151"
      );
      const pokemon = response.data.results;
      setPokelist(pokemon);
    } catch (e) {
      console.log(e.response);
    }
  };

  useEffect(() => {
    fetchPokelist();
  }, []);

  const changePokeName = (event) => {
    setPokeName(event.target.value);
    
 
  };
  
  return (
    <div className="App">
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName}/>}
    </div>
  );
}

export default App;
