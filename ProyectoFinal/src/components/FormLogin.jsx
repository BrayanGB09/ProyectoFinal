import React from "react";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import GetUsers from '../services/GetUsers'
import PostAutenticados from '../services/PostAutenticados'
import { useNavigate } from "react-router-dom";
import 'boxicons'
import '../styles/Login.css'

function FormLogin() {
  
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


  const cargaCorreo = (event) => {
    setCorreo(event.target.value);
  };

  const cargaPassword = (event) => {
    setPassword(event.target.value);
  };

  const cargar = async () => {
 
    console.log('Correo:', correo);
    console.log('Contraseña:', password);

    const lista = await GetUsers();
      console.log(lista);
       
        for (let index = 0; index < lista.length; index++) {
   
           if (lista[index].correo === correo && lista[index].password === password) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "¡Registrado Correctamente!",
              showConfirmButton: false,
              timer: 4000
            });
            await PostAutenticados(correo, password)
            navigate("/Administrador")

            }else{
              Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Usuario no encontrado",
                showConfirmButton: false,
                timer: 4000
              });
             
            }
         }
  };

    return (
        <div className="container-form login hide">
            <div className="information">
                <div className="info-childs">
                    <h1>Bienvenido</h1>
                    <button className="btnRegister"><Link to="/Home" className="textLogin" >Regresar</Link></button>
                </div>
            </div>

            <div className="form-information">
                <div className="form-information-child">
                    <h2>Inicio de Sesión</h2>

                        <br />
         
                    <label className="label">
                        <box-icon name='user' ></box-icon>
                        <input className="input" type="email" id="correo"  name="correo" placeholder="Correo Electrónico" value={correo} onChange={cargaCorreo} required />
                    </label>

                    <label className="label">
                        <box-icon name='lock-alt' ></box-icon>
                        <input className="input" type="password" id="password"  name="password" placeholder="Contraseña" value={password} onChange={cargaPassword} required />
                    </label>

                    <button className="btn" onClick={cargar}>Iniciar Sesión</button>
                </div>
            </div>
        </div>
    )
}

export default FormLogin