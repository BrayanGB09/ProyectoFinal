async function GetAutenticados() {
    try {
        const response = await fetch('http://localhost:3001/autenticados', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching autenticados');
        }

        const autenticados = await response.json();
        return autenticados;
    } catch (error) {
        console.error('Error fetching autenticados:', error);
        throw error;
    }
}

export default GetAutenticados;