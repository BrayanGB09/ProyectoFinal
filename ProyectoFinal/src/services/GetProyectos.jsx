async function GetProyectos() {
    try {
        const response = await fetch('http://localhost:3001/proyects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching proyects');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching proyects:', error);
        throw error;
    }
}

export default GetProyectos;