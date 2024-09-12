import React from 'react'
import { Link } from "react-router-dom";
import "../styles/Navbar.css"

function Navbar() {
  return (
        <div>
            <nav>
                <ul className='contenedorPrincipal'>
                    <Link to="/Principal" className='nav' >Inicio</Link>
                    <Link to="/Servicios" className="nav">Servicios</Link>
                    <Link to="/ABoutUs" className="nav">¿Quiénes somos?</Link>
                    <Link to="/Reseñas" className="nav">Reseñas</Link>
                    <Link to="/Contacto" className="nav">Contacto</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar