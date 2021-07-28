import React from "react";

export default class Etapa2 extends React.Component
{
   state = {
     curso: "",
     unidadeCurso:""

   }

  onChangeCurso = (event) => {
    this.setState({ curso: event.target.value });
  };

  onChangeUnidadeCurso = (event) => {
    this.setState({ valorIdade: event.target.value });
  };



  render() {
    
  

  return(
    <div>
      <h1>Informações do Ensino Superior</h1>
      <h3>Qual o curso: </h3>
      <input value={this.state.curso} onChange={this.onChangeCurso}></input>
      <h3>Qual a unidade do curso: </h3>
      <input value={this.state.unidadeCurso} onChange={this.onChangeUnidadeCurso}></input>
    </div>

  );
}
};