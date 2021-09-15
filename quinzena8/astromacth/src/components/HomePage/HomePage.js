import React, {useEffect,useState} from "react";
import axios from "axios";
import styled from "styled-components";

const ProfileImage = styled.img`
        width: 200px;
        height: 200px;
    `
const HomePage = () => {

    const [profile, setProfile] = useState({})

    useEffect(() => {
        getProfile()
    }, [])
    const getProfile = () =>{
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-mosso-johnson/person").then((response) => {
            setProfile(response.data.profile)
        }).catch((error) => {
            console.log(error.response)
        })
    }
    const choosePerson = (escolha) => {
        
        if(escolha){
        const body = {
        id: profile.id,
        choice: escolha

    }
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-mosso-johnson/choose-person", body ).then((response) => {
            getProfile()
        }).catch((error) => {
            console.log(error)
        })} else {
            const body ={
                id:profile.id,
                choice: escolha
            }
            axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-mosso-johnson/choose-person", body ).then((response) => {
                getProfile()
            }).catch((error) => {
                console.log(error)
            })
        }   
    }

    return (
        <div>
            {!profile ? <div>Acabaram os perfis! Aperte o botão de limpar.</div> : 
            <div>
            < ProfileImage alt={profile.name} src={profile.photo}/>
            <h1>{profile.name}</h1>
            <p>{profile.bio}</p>
            <button onClick={() => choosePerson(true)}>S2</button>
            <button onClick={() => choosePerson(false)}>Não</button>
            </div>}
        </div> 
        )
}

export default HomePage;