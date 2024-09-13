import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import '../styles/Contact.css'
import Ubicacion from './Ubicacion';
import Facebook from '../images/Facebook.png'

export const PageContact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8u8dmgj', 'template_oliuspm', form.current, {
        publicKey: 'kEfn_MiJxalKeYhcc',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            position: "center-right",
            icon: "success",
            title: "Enviado correctamente",
            showConfirmButton: false,
            timer: 4000
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire({
            position: "center-right",
            icon: "error",
            title: `"Usuario no encontrado"${error.text}$`,
            showConfirmButton: false,
            timer: 4000
          });
        },
      );
  };

  return (
<div className='contenedorContact'>
    <div>
    <Ubicacion />
    </div>

    <div>
      <h1 className='tituloContacto'>
        Contacto
      </h1>

      <label>
      <div className='divContacto'>
      <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp"
          className="whatsappContacto"
        />
        <h3 className='textoContacto'>+506 8814 5009</h3>
      </div>
      </label>
            <br />
      
      <label>
        <div className='divFacebook'>
        <img src={Facebook} alt="Facebook" /> 
        <h3 className='textoFacebook'>Facebook</h3>
        </div>
      </label>
    </div>

<div className='formContact1'>
    <form ref={form} onSubmit={sendEmail} className='formContact'>
      <label className='labelFormContact'>
        <box-icon name='user' ></box-icon>
        <input className='textoFormContact' type="text" name="user_name" placeholder="Nombre Completo" />
      </label>
      
      <label className='labelFormContact'>
        <box-icon type='logo' name='gmail'></box-icon>
        <input className='textoFormContact' type="email" name="user_email" placeholder="Correo electrónico" />
      </label>

      <label className='labelFormContact'>
        <box-icon name='message-detail'></box-icon>
        <textarea className='textoFormContact' name="message" placeholder='Agregar mensaje' />
      </label> 

      <input type="submit" value="Enviar" className='btnContact' />
    </form>
    </div>
    </div>
  );
};

