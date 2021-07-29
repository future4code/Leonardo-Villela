import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    usuario: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: 'https://picsum.photos/200/150'

      },
      {
        nomeUsuario: 'Sérgio',
        fotoUsuario: 'https://picsum.photos/id/1001/5616/3744 ',
        fotoPost: 'https://picsum.photos/id/237/200/150'

      },
      {
        nomeUsuario: 'Juarez',
        fotoUsuario: 'https://picsum.photos/id/1005/5760/3840',
        fotoPost: 'https://picsum.photos/seed/picsum/200/150'

      }

    ],

      nomeUsuario: "",
      fotoUsuario:"",
      fotoPost: ""
  };

  adicionaUsuario = () => {
    const novoUsuario = {
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost
    };

    const novoPost = [...this.state.usuario, novoUsuario];

    this.setState({usuario: novoPost})

  };

  onChangeInputUsuario = (event) => {
    this.setState({nomeUsuario: event.target.value});
  } 

  onChangeInputFotoPerfil = (event) => {
    this.setState({fotoUsuario: event.target.value});
  } 

  onChangeInputFoto = (event) => {
    this.setState({fotoPost: event.target.value});
  } 



  render() {
    const ListaDePost = () => this.state.usuario.map((post) => {
      return (
        <Post
          nomeUsuario= {post.nomeUsuario}
          fotoUsuario = {post.fotoUsuario}
          fotoPost = {post.fotoPost}
        ></Post>
      );
    });
    return (

      <MainContainer>
        <input
          value = {this.state.nomeUsuario} 
          onChange = {this.onChangeInputUsuario}
          placeholder = {"Nome"}
        
        />
        <input
          value = {this.state.fotoUsuario} 
          onChange = {this.onChangeInputFotoPerfil}
          placeholder = {"Link da foto do usuário"}
        
        />
        <input
          value = {this.state.fotoPost} 
          onChange = {this.onChangeInputFoto}
          placeholder = {"Postagem"}
        
        />
        <button onClick={this.adicionaUsuario}>Adicionar</button>
          
        
        {ListaDePost()}
      </MainContainer>  
    );
  }
}

export default App;
