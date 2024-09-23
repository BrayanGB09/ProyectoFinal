async function DeleteProyectos(id) {
    try {
      const response = await fetch(`http://localhost:3001/images/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Imagen eliminada correctamente');
      } else {
        console.log('Error al eliminar la imagen');
      }
    } 
    
    catch (error) {
      console.error('Error al eliminar la imagen:', error);
    }
};

export default DeleteProyectos;