import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieCatalog from "./MovieCatalog/MovieCatalog";
import "../assets/styles/reset.css";
import Header from "./Header/Header";
import MovieSessions from "./MovieSessions/MovieSessions";
import SeatReservation from "../components/SeatReservation/SeatReservation";
import Checkout from "./Checkout/Checkout";

export default function App() {
    return(
        <>
            
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<MovieCatalog />} />
                    <Route path="/sessoes/:idFilme" element={<MovieSessions />} />
                    <Route path="/assentos/:idSessao" element={<SeatReservation />} />
                    <Route path="/sucesso" element={<Checkout />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}