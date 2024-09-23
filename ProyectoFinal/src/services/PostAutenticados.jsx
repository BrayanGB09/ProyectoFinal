async function PostAutenticado(correo, password) {
    
    const autenticados = {
        correo,
        password,
    }

    try {
     
        const response = await fetch("http://localhost:3001/autenticados", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(autenticados)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting autenticados:', error);
        throw error;
    }
}

export default PostAutenticado;