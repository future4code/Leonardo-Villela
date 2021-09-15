import axios from "axios";
import React, { useEffect, useState } from "react";
import CardProfile from "../CardProfile/CardProfile";

const MatchsPage = () => {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        pegandoMatches()
    }, [])

    useEffect(()=>{
        pegandoMatches()
    }, [matches])
    
    const pegandoMatches = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-mosso-johnson/matches").then((response) => {
            setMatches(response.data.matches)
        }).catch((error) => {
            console.log(error)
        })
    }
    return (

        <div>
            <CardProfile informacoesMatches={matches} />
        </div>

    )
}

export default MatchsPage;