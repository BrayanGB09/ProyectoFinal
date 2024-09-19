import React, { useEffect, useState } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  // Función para obtener las imágenes del backend
  const fetchImages = async () => {
    try {
      const response = await fetch('http://localhost:3001/images');
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error al obtener las imágenes:', error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <h1>Galería de Imágenes</h1>
      <div>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.image} alt={image.name} style={{ width: '200px' }} />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

