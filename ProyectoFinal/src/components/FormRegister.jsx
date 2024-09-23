import React from "react";
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import GetUsers from '../services/GetUsers';
import PostUsers from '../services/PostUsers';
import { useNavigate } from "react-router-dom";
import '../styles/Register.css'

function FormRegister() {
const [nombre, setNombre] = useState('');
const [correo, setCorreo] = useState('');
const [password, setPassword] = useState('');

const [users, setUsers] = useState([]);
const navigate = useNavigate();

useEffect(() => {
    const fetchUsers = async () => {
      const data = await GetUsers();
     
      
      setUsers(data);
 
    };
    fetchUsers();
  }, []);
  
function  cargaNombre(event) {
    setNombre(event.target.value);
  }

  const cargaCorreo = (event) => {
    setCorreo(event.target.value);
  };

  const cargaPassword = (event) => {
    setPassword(event.target.value);
  };

  const cargar = async () => {
 
    console.log('Nombre:', nombre);
    console.log('Correo:', correo);
    console.log('Contraseña:', password);

    if (!nombre || !correo || !password) {
        Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Debe llenar los espacios",
            showConfirmButton: false,
            timer: 4000
          });

    }else{
        
        let correoExistente = []

        const Usuarios = await GetUsers ();
        correoExistente = Usuarios.filter(users => users.correo === correo);

        console.log(correoExistente);
        
    
        if (correoExistente.length > 0) {
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Este correo ya fue registrado",
                showConfirmButton: false,
                timer: 4000
              });

        } else {
            await PostUsers(nombre, correo, password);
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "¡Registrado Correctamente!",
                showConfirmButton: false,
                timer: 4000
              });
            navigate("/Login")
        }
    }
};

    return (
        <div className="container-form register">
            <div className="information">
                <div className="info-childs">
                    <h2>Bienvenido</h2>
                    <button className="btnLogin"><Link to="/Administrador" className="textLogin" >Regresar</Link></button>
                </div>
            </div>
    
            <div className="form-information">
                <div className="form-information-child">
                    <h2>Crear una cuenta</h2>

                        <br />

                    <input className="input" type="text" id="nombre" name="nombre" placeholder="Nombre Completo" value={nombre} onChange={cargaNombre} required />

                        <br />
                        <br />

                    <input className="input" type="email" id="correo"  name="correo" placeholder="Correo Electrónico" value={correo} onChange={cargaCorreo} required />

                        <br />
                        <br />
                    
                    <input className="input" type="password" id="password"  name="password" placeholder="Contraseña" value={password} onChange={cargaPassword} required />

                        <br />
                        <br />

                    <select className="input">
                        <option className="options">Seleccionar</option>
                        <option className="options">Administrador</option>
                        <option className="options">Trabajador</option>
                    </select>

                        <br />
                        <br />

                        
                    <button className="btn" onClick={cargar}>Registrarse</button>
                </div>
            </div>
        </div>
    )
}

export default FormRegister