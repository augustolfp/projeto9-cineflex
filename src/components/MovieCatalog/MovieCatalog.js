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
        <Container>
            {catalog.map((obj,index) => <MoviePoster key={index} image={obj.posterURL}/>)}
        </Container>
    ); 
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

