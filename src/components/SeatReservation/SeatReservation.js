import Footer from "../Footer/Footer";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import React from "react";
import axios from "axios";
import SeatButton from "../SeatButton/SeatButton";

export default function SeatReservation(props) {
    const [seats, setSeats] = React.useState({});
    const [name, setName] = React.useState("");
    const [CPF, setCPF] = React.useState("");

    const {idSessao} = useParams();
    React.useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then(response => setSeats(response.data));
        promise.catch(error => console.log("Erro" + error.response.status));
    }, [])
    function submitForm(event) {
        event.preventDefault();
        console.log(name)
    }

    function handleSeatClick(index) {
        if(seats.seats[index].isAvailable) {
            setSeats(seats, seats.seats[index].isSelected = true);
        }
        console.log(seats.seats)
    }

    if(seats.movie) {
        return(
            <>
                <Title>
                    Selecione o(s) assentos(s)
                </Title>
                <Container>
                    <SeatGrid>
                        {seats.seats.map((seat,index) => <SeatButton {...seat} key={index} click={() => handleSeatClick(index)} />)}
                    </SeatGrid>
                </Container>
                <form onSubmit={submitForm}>
                    <label>Nome do comprador:</label>
                    <input type="text" id="userLegalName" placeholder="Digite seu nome..." onChange={ev => setName(ev.target.value)}/>
                    <label>CPF do comprador:</label>
                    <input type="text" id="CPF" placeholder="Digite seu CPF..." onChange={ev => setCPF(ev.target.value)} />
                    <button type="submit">clica ai</button>
                </form>
                <Footer image={seats.movie.posterURL}>
                    {seats.movie.title}
                    {seats.day.weekday}
                    {seats.name}
                </Footer>
            </>
        );
    }
    else {
        return(
            <div>Carregando</div>
        );
    }
}

const Title = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    color: #293845;
    text-align: center;
    margin: 30px 10px;
`
const SeatGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 400px;
`
const Container = styled.div`
    display:flex;
    justify-content:center;
`