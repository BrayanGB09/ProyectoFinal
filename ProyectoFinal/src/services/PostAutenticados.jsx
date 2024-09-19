async function PostAutenticado(autentificacion) {
    
    try {
     
        const response = await fetch("http://localhost:3001/autenticados", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(autentificacion)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export default PostAutenticado;