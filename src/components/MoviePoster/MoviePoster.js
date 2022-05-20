import styled from "styled-components";

export default function MoviePoster(props) {
    return(
        <Poster>
            <img src={props.image} />
        </Poster>
    );
}

const Poster = styled.div`
    box-sizing: border-box;
    width: 146px;
    height: 210px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    padding: 8px;
    margin: 11px 16px;

    img {
        width: 100%;
    }
`
