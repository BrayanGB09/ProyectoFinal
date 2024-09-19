import React, { useState } from 'react';

const ImageUploader = () => {
  const [imageBase64, setImageBase64] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  // Función para convertir la imagen a base64
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result); // Convertimos la imagen a base64
        setImageFile(file); // Guardamos el archivo
      };
      reader.readAsDataURL(file);
    }
  };

  // Función para enviar la imagen base64 al backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (imageBase64) {
      try {
        const response = await fetch('http://localhost:3001/images', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            image: imageBase64,
            name: imageFile.name,
          }),
        });

        if (response.ok) {
          alert('Imagen guardada correctamente');
        } else {
          alert('Error al guardar la imagen');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error al enviar la imagen');
      }
    }
  };

  return (
    <div>
      <h1>Subir Imagen</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {imageBase64 && (
          <div>
            <h3>Vista previa:</h3>
            <img src={imageBase64} alt="Vista previa" style={{ width: '200px' }} />
          </div>
        )}
        <button type="submit">Guardar Imagen</button>
      </form>
    </div>
  );
};

export default ImageUploader;
