import React from "react";
import Logo from "../images/Logo.jpg"
import "../styles/Header.css"
import Navbar from "../components/Navbar";

function Header() {
    return (
        <header className="encabezado">
            <div className="contenedor1">
                <img src={Logo} alt="Logo" className="logo" />
            </div>

            <div className="contenedor2">

            </div>
               
            <div className="contenedor3">
                <Navbar />
            </div>
        </header>
    )
}

export default Header