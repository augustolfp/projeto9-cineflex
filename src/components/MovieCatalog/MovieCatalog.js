import React from "react";
import axios from "axios";
import styled from "styled-components";
import MoviePoster from "../MoviePoster/MoviePoster";

export default function MovieCatalog() {
    const [catalog, setCatalog] = React.useState([]);

    React.useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then(response => setCatalog(response.data));
        promise.catch(error => console.log("Erro " + error.response.status));

    }, []);
    return (
        <>
            <Title>
                Selecione o filme
            </Title>
            <MoviesContainer>
                {catalog.map((obj,index) => <MoviePoster key={index} id={obj.id} image={obj.posterURL}/>)}
            </MoviesContainer>
        </>
    ); 
}

const MoviesContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const Title = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    color: #293845;
    text-align: center;
    margin: 30px 10px;
`

