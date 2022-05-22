import styled from "styled-components";

export default function SeatButton({id, name, isAvailable}) {
    return(
        <Seat color={isAvailable? "#C3CFD9" : "#FBE192"} >{name}</Seat>
    );
}

const Seat = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 12px 5px;
    font-family: 'Roboto', sans-serif;
    width: 26px;
    height: 26px;
    font-size: 11px;
    background-color: ${props => props.color};
    border: 1px solid #808F9D;
    border-radius: 12px;
`