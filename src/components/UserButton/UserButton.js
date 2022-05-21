import styled from "styled-components";

export default function UserButton(props) {
    return(
        <Container type="button">{props.children}</Container>
    );
}

const Container = styled.button`
    background-color: #E8833A;
    border-radius: 3px;
    border-style: none;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: white;
    padding: 8px 20px;

`