import styled from "styled-components";

export default function Header() {
    return(
        <Container>
            CINEFLEX
        </Container>
    );
}

const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 68px;
    font-size: 34px;
    font-family: 'Roboto', sans-serif;
    color: #E8833A;
    background-color: #C3CFD9;
`