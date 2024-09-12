import React from "react";
import LogoIG from "../images/LogoIG.png"
import { Link } from "react-router-dom";
import "../styles/Footer.css"

function Footer() {
    return (
        <div className="contenedor">
            <h3 className="text">©2024 Desarrollado por Brayan Gutiérrez</h3>
            <Link to="https://www.instagram.com/brayan_gutierrez_b?igsh=MXEwMHQ1NzNlZjhjdw==" className='nav' ><img src={LogoIG} alt="LogoIG" className="logoIG"/></Link>
        </div>
    )
}

export default Footer