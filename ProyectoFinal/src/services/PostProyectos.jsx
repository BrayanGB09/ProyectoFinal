async function PostProyectos(images) {

    try {
        const response = await fetch('http://localhost:3001/images', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(images),
        });
        if (response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error posting proyect:', error);
        throw error;
    }
}
export default PostProyectos;