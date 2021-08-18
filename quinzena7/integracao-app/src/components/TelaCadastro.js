import axios from "axios";
import React from "react";


export default class TelaCadastro extends React.Component {
    state = {
        nome: "",
        email:""
    }

    adicionandoNome = (event) => {
        this.setState({nome: event.target.value})
    }

    adicionandoEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazendoCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        axios.post(url, body, {
            headers: {
                Authorization: "leonardo-mosso-johnson"
            }
        }).then((response) => {
           alert("Usuário cadastrado com sucesso")
           this.setState({nome:"", email:""})
        })
        .catch((erro) =>{
            console.log(erro.response.data)
        })


    }

    render(){
        return(
            <div>
                <button onClick={this.props.irParaLista}>Ir para Lista</button>
                <h2>Cadastro</h2>
                <input placeholder={"Nome"} value={this.state.nome} onChange={this.adicionandoNome}></input>
                <input placeholder={"Email"} value={this.state.email} onChange={this.adicionandoEmail}></input>
                <button onClick={this.fazendoCadastro}>Cadastrar</button>

            </div>

        )
}
}