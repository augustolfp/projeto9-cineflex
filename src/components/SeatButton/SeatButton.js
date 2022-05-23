import styled from "styled-components";
import React from "react";

export default function SeatButton({name, click, color}) {

    return(
        <Seat onClick={click} cor={color}>{name}</Seat>
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
    background-color: ${(props) => props.cor};
    border: 1px solid #808F9D;
    border-radius: 12px;
`