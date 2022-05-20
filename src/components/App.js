import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieCatalog from "./MovieCatalog/MovieCatalog";
import "../assets/styles/reset.css";
import Header from "./Header/Header";
import MovieSessions from "./MovieSessions/MovieSessions";

export default function App() {
    return(
        <>
            
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<MovieCatalog />} />
                    <Route path="/sessoes/:idFilme" element={<MovieSessions />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}