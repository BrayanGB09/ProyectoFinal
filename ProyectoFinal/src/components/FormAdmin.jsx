import React, { useState } from 'react';
import Swal from 'sweetalert2'
import PostProyectos from '../services/PostProyectos';
import '../styles/Administrador.css'

const ImageUploader = () => {
  const [imageBase64, setImageBase64] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
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
      <h1>Subir Imagen</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {imageBase64 && (
          <div>
            <h3>Vista previa:</h3>
            <img className='imageform' src={imageBase64} alt="Vista previa" />
          </div>
        )}
        <button type="submit">Guardar Imagen</button>
      </form>
    </div>
  );
};

export default ImageUploader;
