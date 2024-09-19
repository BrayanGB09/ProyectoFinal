async function DeleteProyectos(id) {
    try {
        const response = await fetch(`http://localhost:3001/proyects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error deleting request with id ${id}`);
        }
        return { message: `Request with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting request:', error);
        throw error;
    }
}

export default DeleteProyectos;