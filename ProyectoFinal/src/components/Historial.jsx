import React, { useEffect, useState } from 'react';
import DeleteProyectos from '../services/DeleteProyectos';
import GetProyectos from '../services/GetProyectos';
import Swal from 'sweetalert2'
import '../styles/Historial.css'

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const data = await GetProyectos();
          
      setImages(data);
 
    };
    fetchImages();
  }, []);

const eliminarImagen = async (id) => {
  
    await DeleteProyectos (id) 
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "¡Imagen eliminada correctamente!",
      showConfirmButton: false,
      timer: 3000
    });
} 

  return (
    <div>
      <h1>Galería de Imágenes</h1>
      <div>
        {images.map((image) => (
          <div key={image.id}>
            <img className='imageform' src={image.image} alt={image.name} />
            <p>{image.name}</p>
            <button onClick={e => eliminarImagen(image.id)}>Eliminar</button>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

