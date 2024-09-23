async function DeleteAutenticados(id) {
    try {
        const response = await fetch(`http://localhost:3001/autenticados/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting autenticado with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting autenticados:', error);
        throw error;
    }
}

export default DeleteAutenticados;