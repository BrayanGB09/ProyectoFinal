import React from "react";
import Logo from "../images/Logo.jpg"
import "../styles/HeaderAdmin.css"
import NavbarAdmin from "../components/NavbarAdmin";

function HeaderAdmin() {
    return (
        <header className="encabezado">
            <div className="contenedor1">
                <img src={Logo} alt="Logo" className="logo" />
            </div>

            <div className="contenedor2">

            </div>

            <div className="contenedor3">
                <NavbarAdmin />
            </div>
        </header>
    )
}

export default HeaderAdmin