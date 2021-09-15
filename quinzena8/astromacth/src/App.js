import React, { useState } from "react";
import HomePage from "./components/HomePage/HomePage"
import MatchsPage from "./components/MatchsPage/MatchsPage"
import styled from "styled-components"
import axios from "axios";


 const ContainerGeral = styled.div`
        height: 200px;
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content:space-between;
  `

  const DivisionCentral = styled.div`
      height: 100px;
      display:flex;
      flex-direction: column;
      align-items:center;
      justify-content:space-between;
  `
function App() {
  const [currentPage, setCurrentPage] = useState("homePage");
  const mudarPagina = () => {
    setCurrentPage("MatchsPage")
  }

  const mudarPaginaHome = () => {
    setCurrentPage("homePage")
  }

  const limparMatches = async () => {
    try {
      await axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-mosso-johnson/clear")
      console.log("Limpando Matches")

    } catch (error) {
      console.log(error.response)
    }
  }
  return (
    <ContainerGeral >
      <h1>Astromatch</h1>
      {currentPage === "homePage" ?
        <DivisionCentral>
          <div>
            <HomePage />
          </div>
          <div>
            <button onClick={mudarPagina}>Ir para Matchs</button>
            <button onClick={limparMatches}>Limpar Matchs</button>
          </div>
        </DivisionCentral>
        : <div>
          <MatchsPage />
          <button onClick={mudarPaginaHome}>Ir para HomePage</button>
          <button onClick={limparMatches}>Limpar Matchs</button>
        </div>
      }
    </ContainerGeral>
  );
}
export default App;
