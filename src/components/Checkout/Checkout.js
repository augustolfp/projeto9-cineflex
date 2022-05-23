import styled from "styled-components";
import { useLocation } from "react-router-dom";
export default function Checkout() {
    const location = useLocation();

    console.log(location.state)
    const seatNumbers = location.state.ids.map((element) => location.state.seats.filter(obj => obj.id===element));
    console.log(seatNumbers)
    return (
        <Container>
            <SucessMsg>Pedido feito com sucesso!</SucessMsg>
            <InfoHeader>Filme e sessão</InfoHeader>
            <Info>{location.state.movie.title}</Info>
            <Info>{location.state.day.date} {location.state.name}</Info>
            <InfoHeader>Ingressos</InfoHeader>
            {seatNumbers.map((obj,index) => <Info key={index} >Assento {obj[0].name}</Info>)}
            <InfoHeader>Comprador</InfoHeader>
            <Info>Nome: {location.state.userName}</Info>
            <Info>CPF: {location.state.cpf}</Info>
        </Container>
    );
}

const SucessMsg = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 15px 10px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: #247A6B;

`

const InfoHeader = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: #293845;
`

const Container = styled.div`
    width: 100%;
    margin: 0 30px;
`

const Info = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    color: #293845;
`