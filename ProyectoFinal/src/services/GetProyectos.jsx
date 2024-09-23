async function GetProyectos() {
    try {
        const response = await fetch('http://localhost:3001/images', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        if (!response.ok) {
            throw new Error('Error fetching project');
        }
        const data = await response.json();
            return data;
        } catch (error) {
        console.error('Error fetching project:', error);
        throw error;
    }
}

export default GetProyectos;

