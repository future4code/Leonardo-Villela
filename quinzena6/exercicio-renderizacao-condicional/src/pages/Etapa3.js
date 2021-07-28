import React from "react";

export default class Etapa3 extends React.Component
{
   state = {
     argumentoNãoCurso: "",
     valorCursosComplementar: ""

   }

  onChangeArgumento = (event) => {
    this.setState({ curso: event.target.value });
  };

  onChangeCursoComplementar = (event) => {
    this.setState({ valorEscolaridade: event.target.value });
  };


  render() {
    
  

  return(
    <div>
      <h1>Informações Gerais de Ensino</h1>
      <h3>Por que você não terminou um curso de graduação? </h3>
      <input value={this.state.curso} onChange={this.onChangeArgumento}></input>
      <h3>Você fez algum curso complementar?</h3>
      <select value={this.state.valorCursosComplementar} onChange={this.onChangeCursoComplementar}>
        <option>Nenhum</option>
        <option>Curso Técnico</option>
        <option>Curso de Inglês</option>
      </select>
    </div>

  );
}
};