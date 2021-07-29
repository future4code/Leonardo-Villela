import "./App.css";
import React from "react";
import Etapa1 from "./pages/Etapa1";
import Etapa2 from "./pages/Etapa2";
import Etapa3 from "./pages/Etapa3";
import PaginaFinal from "./pages/PaginaFinal";




export default class App extends React.Component {
  state = {
    etapa: 1,
  };


  irParaProximaEtapa = () => {
    this.setState({etapa: this.state.etapa + 1})
  }

renderizarEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <Etapa1 />;
        case 2:
          return <Etapa2 />; 
        case 3:
          return <Etapa3 />;
        default:
          return <PaginaFinal />;
      }
    };

  render() {
    
    let estilizacaoPagina

    if(this.state.etapa !== 4){
    estilizacaoPagina = <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>;}
    

    return (
      <div className="App">
        {this.renderizarEtapa()}
        {estilizacaoPagina}
      </div>
    );
  }
}
