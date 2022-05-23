import styled from "styled-components";
import { useLocation } from "react-router-dom";
export default function Checkout() {
    const location = useLocation();

    console.log(location.state)
    return (
        <Container>
            <SucessMsg>Pedido feito com sucesso!</SucessMsg>
            <Info>Filme e sessão</Info>
            <Info>Ingressos</Info>
            <Info>Comprador</Info>
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

const Info = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: #293845;
`

const Container = styled.div`
    width: 100%;
    margin: 0 30px;
`