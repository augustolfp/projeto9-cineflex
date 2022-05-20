import styled from "styled-components";

export default function Footer(props) {
    return(
        <Container>
            <ImageContainer>
                <img src={props.image} />
            </ImageContainer>
            <TextContainer>
                {props.children}
            </TextContainer>
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 118px;
    background-color: #DFE6ED;
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    color: #293845;
    border-top: 1px solid #9EADBA;
`

const ImageContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 64px;
    height: 90px;
    padding: 8px;
    margin-left: 10px;
    margin-right: 14px;

    img {
        width: 100%;
    }
`

const TextContainer = styled.div`
    width: 280px;
    word-break: break-word;
`