import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import GetAutenticados from '../services/GetAutenticados';
import DeleteAutenticados from '../services/DeleteAutenticados';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavbarAdmin.css'

function NavbarAdmin() {

  const [autenticados, setAutenticados] = useState([]);
  const navigate = useNavigate();

    useEffect(() => {
      const fetchAutenticados = async () => {
        const data = await GetAutenticados();
       
        
        setAutenticados(data);
   
      };
      fetchAutenticados();
    }, []);

    const eliminarAutenticados = (id) => {
      setAutenticados(autenticados.filter((id) => autenticados.id !== id));
      DeleteAutenticados(id);
      navigate("/Login")
    }

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand>
              <button className="btn" onClick={e=>{eliminarAutenticados(autenticados.id)}} >Cerrar Sesión</button>          
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Nosara Power Solutions
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/Home" className='nav' >Inicio</Link>
                  <Link to="/Servicios" className="nav">Servicios</Link>
                  <Link to="/Proyectos" className="nav">Proyectos</Link>
                  <Link to="/Marcas" className='nav' >Marcas</Link>
                  <Link to="/ABoutUs" className="nav">¿Quiénes somos?</Link>
                  <Link to="/Reseñas" className="nav">Reseñas</Link>
                  <Link to="/Contact" className="nav">Contacto</Link>
                  <Link to="/Administrador" className="nav">Administrador</Link>
                  <Link to="/Historial" className='nav' >Historial</Link>
                  
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                  <h3 className='navText'>Solo administradores</h3>                 
                  <Link to="/Login" className='nav'>Iniciar sesión</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarAdmin;