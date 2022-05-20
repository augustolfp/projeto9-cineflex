import React from "react";
import MovieCatalog from "./MovieCatalog/MovieCatalog";
import "../assets/styles/reset.css";
import Header from "./Header/Header";

export default function App() {
    return(
        <>
            <Header />
            <MovieCatalog />
        </>
    );
}