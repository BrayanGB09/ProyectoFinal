async function PutUsers(nombre, correo, password, id) {
    try {
     
        const userData = { 
            nombre, 
            correo,
            password 
        
        };
        const response = await fetch("http://localhost:3001/users/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export default PutUsers;