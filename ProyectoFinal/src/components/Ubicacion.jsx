import React from 'react';
import '../styles/Ubicacion.css'

const Ubicacion = () => {
  return (
    <div>
      <iframe className='mapa'
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d406.11037678328563!2d-85.64328852523067!3d9.987280411263503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2scr!4v1726242615210!5m2!1ses-419!2scr"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Ubicacion;
