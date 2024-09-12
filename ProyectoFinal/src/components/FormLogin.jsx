import React from "react";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import GetUsers from '../services/GetUsers'
import { useNavigate } from "react-router-dom";
import 'boxicons'
import '../styles/Login.css'

function FormLogin() {
  
  const [nombre, setNombre] = useState('');
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

  const cargaPassword = (event) => {
    setPassword(event.target.value);
  };

  const cargar = async () => {
 
    console.log('Nombre:', nombre);
    console.log('Contraseña:', password);

    const lista = await GetUsers();
      console.log(lista);
       
        for (let index = 0; index < lista.length; index++) {
   
           if (lista[index].nombre === nombre && lista[index].password === password) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "¡Registrado Correctamente!",
              showConfirmButton: false,
              timer: 4000
            });
                              
            navigate("/Home")

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
                    <h2>Crea tu cuenta</h2>
                    <p>¿Aún no tienes una cuenta? 
                    Creála y únete a nuestra comunidad</p>
                    <button className="btnRegister"><Link to="/Register" className="textRegister" >Crear Cuenta</Link></button>
                </div>
            </div>

            <div className="form-information">
                <div className="form-information-child">
                    <h2>Inicio de Sesión</h2>

                        <br />
         
                    <label className="label">
                        <box-icon name='user' ></box-icon>
                        <input className="input" type="text" id="nombre" name="nombre" placeholder="Nombre Completo" value={nombre} onChange={cargaNombre} required />
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