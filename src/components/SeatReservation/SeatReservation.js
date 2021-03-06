import Footer from "../Footer/Footer";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import SeatButton from "../SeatButton/SeatButton";

export default function SeatReservation(props) {
    const [seats, setSeats] = React.useState({});
    const [name, setName] = React.useState("");
    const [CPF, setCPF] = React.useState("");
    const navigate = useNavigate();
    const {idSessao} = useParams();

    React.useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then(response => setSeats(response.data));
        promise.catch(error => console.log("Erro" + error.response.status));
    }, []);

    function submitForm(event) {
        event.preventDefault();
        const selectedSeats = seats.seats.filter(seat => seat.isSelected);
        const reservation = {
            ids: selectedSeats.map(seat => seat.id),
            name: name,
            cpf: CPF
        }
        const reserveRequest = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', reservation);
        reserveRequest.then(navigate('/sucesso',{state: {...reservation,...seats, userName: reservation.name}}));
        reserveRequest.catch(error => console.log("Erro" + error.response.status));
        
    }

    function handleSeatClick(index) {
        if(seats.seats[index].isAvailable) {
            if(typeof seats.seats[index].isSelected === "undefined") {
                setSeats({...seats}, seats.seats[index].isSelected = true);
            }
            else {
                setSeats({...seats}, seats.seats[index].isSelected = !seats.seats[index].isSelected);
            }
        }
    }

    function colorPicker(index) {
        if(seats.seats[index].isAvailable) {
            if(seats.seats[index].isSelected) {
                return "green";
            }
            else {
                return "#C3CFD9";
            }
        }
        else {
            return "yellow";
        }
    }

    if(seats.movie) {
        return(
            <>
                <Title>
                    Selecione o(s) assentos(s)
                </Title>

                <Container>
                    <SeatGrid>
                        {seats.seats.map((seat,index) => <SeatButton name={seat.name} key={index} click={() => handleSeatClick(index)} color={() => colorPicker(index)} />)}
                    </SeatGrid>
                </Container>

                <Form onSubmit={submitForm}>
                    <label>Nome do comprador:</label>
                    <input type="text" id="userLegalName" placeholder="Digite seu nome..." onChange={ev => setName(ev.target.value)}/>
                    <label>CPF do comprador:</label>
                    <input type="text" id="CPF" placeholder="Digite seu CPF..." onChange={ev => setCPF(ev.target.value)} />
                    <button type="submit">Reservar assento(s)</button>
                </Form>

                <Footer image={seats.movie.posterURL}>
                    {seats.movie.title}<br/>
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
    justify-content: center;
    flex-wrap: wrap;
    max-width: 400px;
`
const Container = styled.div`
    display:flex;
    width: 100%;
    justify-content:center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 14px;

    label {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        color: #293845;
        margin-bottom: 4px;
    }

    input {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        height: 50px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        margin-bottom: 12px;
    }

    button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 12px 50px;
    max-width: 300px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: white;
    background-color: #E8833A;
    border: 1px solid #808F9D;
    border-radius: 3px;
    padding: 8px 12px;
    }
`