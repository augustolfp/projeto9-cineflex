import { useParams } from "react-router-dom";
import React from "react";
import axios from "axios";
import Footer from "../Footer/Footer";

export default function MovieSessions() {
    const [sessions, setSessions] = React.useState({});
    const {idFilme} = useParams();
    React.useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        promise.then(response => setSessions(response.data));
        promise.catch(error => console.log("Erro" + error.response.status));
    },[]);
    
    return(
        <>
            <div>
                {sessions.title}     
                {sessions.overview}
            </div>
            <Footer image={sessions.posterURL}>
                {sessions.title}
            </Footer>
        </>
    );
}