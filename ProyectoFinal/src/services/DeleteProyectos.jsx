async function DeleteProyectos(id) {
    try {
      const response = await fetch(`http://localhost:3001/images/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        throw new Error(`Error deleting project with id ${id}`);
      } 
      return { message: `Project with id ${id} deleted successfully` };
    } 
    
    catch (error) {
      console.error('Error deleting project:', error);
      throw error;
    }
};

export default DeleteProyectos;