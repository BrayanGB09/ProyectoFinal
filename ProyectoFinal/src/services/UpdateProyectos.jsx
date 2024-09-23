async function PutProyectos (userId, base64Image) {
  
const response = await fetch(`http://localhost:3001/images/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ image: base64Image })
  });

  if (response.ok) {
    alert('Imagen actualizada con éxito');
  } else {
    alert('Error al actualizar la imagen');
  }
};

export { PutProyectos };



const EditImageGallery = () => {
  const [images, setImages] = useState([]);
  const [editingImage, setEditingImage] = useState(null); // Imagen que se está editando
  const [imageBase64, setImageBase64] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // Obtener las imágenes desde el backend
  const fetchImages = async () => {
    try {
      const response = await fetch('http://localhost:5000/images');
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error al obtener las imágenes:', error);
    }
  };

  // Seleccionar una imagen para editar
  const handleEditClick = (image) => {
    setEditingImage(image);
    setImageBase64(image.image);
    setName(image.name);
    setDescription(image.description);
  };

  // Convertir la nueva imagen a base64 si el usuario selecciona una nueva imagen
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result); // Convertimos la imagen a base64
      };
      reader.readAsDataURL(file);
    }
  };

  // Actualizar la imagen en el backend usando PUT
  const handleSaveChanges = async () => {
    if (editingImage) {
      try {
        const response = await fetch(`http://localhost:5000/images/${editingImage.id}`, {
          method: 'PUT', // Actualiza la imagen completamente
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: editingImage.id,
            image: imageBase64,
            name,
            description,
          }),
        });

        if (response.ok) {
          // Actualizar el estado de las imágenes en el frontend
          setImages(
            images.map((img) =>
              img.id === editingImage.id ? { ...img, image: imageBase64, name, description } : img
            )
          );
          setEditingImage(null); // Salir del modo edición
          alert('Imagen actualizada correctamente');
        } else {
          alert('Error al actualizar la imagen');
        }
      } catch (error) {
        console.error('Error al actualizar la imagen:', error);
        alert('Error al enviar la actualización');
      }
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);
};

export default EditImageGallery;



fetch(`http://localhost:5000/images/${imageId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: imageId,
      image: newBase64Image,  // Imagen en base64 actualizada
      name: updatedName,
      description: updatedDescription,
    }),
  });
  