import React from "react";
import axios from "axios";
import styled from "styled-components";

export default function MovieCatalog() {
    const [catalog, setCatalog] = React.useState([]);

    React.useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then(response => setCatalog(response.data));
        promise.catch(error => console.log("Erro " + error.response.status));

    }, []);
    return (
        <Container>
            {catalog.map((obj,index) => <div key={index}>{obj.title}</div>)}
        </Container>
    ); 
}

const Container = styled.div`
    color: #000000;
`