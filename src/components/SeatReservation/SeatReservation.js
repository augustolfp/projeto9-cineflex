import Footer from "../Footer/Footer";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import React from "react";
import axios from "axios";

export default function SeatReservation(props) {
    const [seats, setSeats] = React.useState({});
    const {idSessao} = useParams();
    React.useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then(response => setSeats(response.data));
        promise.catch(error => console.log("Erro" + error.response.status));
    }, [])
    console.log(seats);
    return(
        <Title>
            Selecione o(s) assentos(s)
        </Title>
    );
}

const Title = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    color: #293845;
    text-align: center;
    margin: 30px 10px;
`