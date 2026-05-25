// Task 2: listUsers()

async function listUsers() {
    try {
        const response = await fetch('http://localhost:3000/users'); 
        const data = await response.json(); 
        console.log(data); 
    } catch (error) {
        console.error('Error:', error);
    }
}

export { listUsers };