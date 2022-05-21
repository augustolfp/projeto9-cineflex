import { useParams } from "react-router-dom";
import React from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import styled from "styled-components";
import AvailableDay from "../AvailableDay/AvailableDay";

export default function MovieSessions() {
    const [sessions, setSessions] = React.useState({});
    const {idFilme} = useParams();
    React.useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        promise.then(response => setSessions(response.data));
        promise.catch(error => console.log("Erro" + error.response.status));
    },[]);

    if(sessions.days) {
       return(
            <>
            <Title>
                Selecione o horário
            </Title>
            {sessions.days.map((obj,index) => <AvailableDay key={index} day={obj} />)}
            <Footer image={sessions.posterURL}>
                {sessions.title}
            </Footer>
        </>
        );
    }
    else {
        return (<h4>Carregando...</h4>);
    }
}

const Title = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    color: #293845;
    text-align: center;
    margin: 30px 10px;
`