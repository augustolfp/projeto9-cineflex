import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
export default function Checkout() {
    const location = useLocation();

    const seatNumbers = location.state.ids.map((element) => location.state.seats.filter(obj => obj.id===element));

    return (
        <>
        <SucessMsg>Pedido feito com sucesso!</SucessMsg>
        <Container>
            <InfoHeader>Filme e sessão</InfoHeader>
            <Info>{location.state.movie.title}</Info>
            <Info>{location.state.day.date} {location.state.name}</Info>
            <InfoHeader>Ingressos</InfoHeader>
            {seatNumbers.map((obj,index) => <Info key={index} >Assento {obj[0].name}</Info>)}
            <InfoHeader>Comprador</InfoHeader>
            <Info>Nome: {location.state.userName}</Info>
            <Info>CPF: {location.state.cpf}</Info>
        </Container>
        <Link to={`/`}><Home>Voltar para Home</Home></Link>
        </>
    );
}

const SucessMsg = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 15px 0px;
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
    margin-top: 34px;
    margin-bottom: 8px;
`

const Container = styled.div`
    width: 100%;
    margin: 0 30px;
`

const Info = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    color: #293845;
    margin-bottom: 4px;
`

const Home = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 12px 50px;
    max-width: 300px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: white;
    background-color: #E8833A;
    border: none;
    border-radius: 3px;
    padding: 8px 12px;
`