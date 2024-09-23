import React, { useState } from 'react';
import Swal from 'sweetalert2'
import PostProyectos from '../services/PostProyectos';
import '../styles/Administrador.css'

const FormAdmin = () => {
  const [proyecto, setProyecto] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imageBase64, setImageBase64] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  function cargaProyecto(event) {
    setProyecto(event.target.value);
  }

  const cargaDescripcion = (event) => {
    setDescripcion(event.target.value);
  };

  const seleccionarImagenEditar = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result);
        setImageFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newImage = {
      proyecto: proyecto,
      descripcion: descripcion,
      image: imageBase64,
      name: imageFile.name,
    };

    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "¡Imagen guardada correctamente!",
      showConfirmButton: false,
      timer: 3000
    });
      await PostProyectos(newImage) 
  } 

  return (
    <div>

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
      
      <div className='contenedorAdmin'>
      <form className='formAdmin' onSubmit={handleSubmit}>
        <label className='labelFormAdmin'>
        <input
          className='inputAdmin'
          type="text"
          placeholder="Nombre del Proyecto"
          value={proyecto}
          onChange={cargaProyecto}
        />
        </label>

        <label className='labelFormAdmin'>
        <textarea
          className='inputAdmin'
          placeholder="Descripción del Proyecto"
          value={descripcion}
          onChange={cargaDescripcion}
        />
        </label>

        <label className='labelFormAdmin'>
        <input  className='inputAdmin' type="file" accept="image/*" onChange={seleccionarImagenEditar} />
        </label>
        
        <button className='btnAdmin2' type="submit">Guardar Imagen</button>
        </form>
        </div>

          <br />

        {imageBase64 && (
          <div>
            <h3>Vista previa:</h3>
            <img className='imageform' src={imageBase64} alt="Vista previa" />
          </div>          
        )}
    </div>
  );
};

export default FormAdmin;
