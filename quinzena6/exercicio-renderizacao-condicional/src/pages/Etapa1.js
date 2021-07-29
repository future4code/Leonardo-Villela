import React from "react";

export default class Etapa1 extends React.Component
{
  state = {
    valorNome: "",
    valorIdade: "",
    valorEmail: "",
    valorEscolaridade:"Ensino Médio Incompleto"
  };

  onChangeNome = (event) => {
    this.setState({ valorNome: event.target.value });
  };

  onChangeIdade = (event) => {
    this.setState({ valorIdade: event.target.value });
  };


  onChangeEmail = (event) => {
    this.setState({ valorEmail: event.target.value });
  };

  onChangeEscolaridade = (event) => {
    this.setState({ valorEscolaridade: event.target.value });
  };

 

  render() {
     console.log("Escolaridade:", this.state.valorEscolaridade)
  

  return(
    <div>
      <h1>Dados Gerais</h1>
      <h3>Nome:</h3>
      <input value={this.state.valorNome} onChange={this.onChangeNome}></input>
      <h3>Idade:</h3>
      <input value={this.state.valorIdade} onChange={this.onChangeIdade}></input>
      <h3>Email:</h3>
      <input value={this.state.valorEmail} onChange={this.onChangeEmail}></input>
      <h3>Escolaridade:</h3>
      <select value={this.state.valorEscolaridade} onChange={this.onChangeEscolaridade}>
        <option>Ensino Médio Incompleto</option>
        <option>Ensino Médio Completo</option>
        <option>Ensino Superior Incompleto</option>
        <option>Ensino Superior Completo</option>
      </select>
    </div>

  );
}
};