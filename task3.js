async function addUser(first_name, last_name, email) {
    try {
        const listResponse = await fetch('http://localhost:3000/users');
        const users = await listResponse.json();
        
        let maxId = 0;
        users.forEach(user => {
            const currentId = parseInt(user.id);
            if (!isNaN(currentId) && currentId > maxId) {
                maxId = currentId;
            }
        });
        const nuevoId = (maxId + 1).toString(); 

        const newUser = {
            id: nuevoId,
            first_name: first_name,
            last_name: last_name,
            email: email
        };

        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });

        const data = await response.json();
        console.log('Nuevo usuario creado:', data);
        
        // ¡Esta línea era la que faltaba!
        return data; 
    } catch (error) {
        console.error('Error:', error);
    }
}

export { addUser };