import UserButton from "../UserButton/UserButton";
import styled from "styled-components";
export default function AvailableDay({day}) {

    if(day) {
        return(
            <>
                <Date>
                    {`${day.weekday} - ${day.date}`}
                </Date>
                <ButtonContainer>
                    {day.showtimes.map((session,index) => <UserButton id={session.id} key={index} >{session.name}</UserButton>)}
                </ButtonContainer>
            </>
        );
    }
    else {
        return(
            <h3>Carregando...</h3>
        );
    }

}

const Date = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: #293845;
`

const ButtonContainer = styled.div`
    display: flex;
`