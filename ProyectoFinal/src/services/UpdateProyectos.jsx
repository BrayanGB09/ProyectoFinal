async function PutProyectos(id, proyecto) {
    try {
        const response = await fetch(`http://localhost:3001/proyects/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(proyecto)
        });

        if (!response.ok) {
            throw new Error(`Error en la actualización: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error PutProyectos:', error);
        throw error; 
    }
}

export default PutProyectos;