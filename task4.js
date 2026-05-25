// Task 4: delUser(number)
async function delUser(id) {
    try {
        const response = await fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE'
        });
        
        console.log(`Usuario con id ${id} ha sido eliminado.`);
        return response;
    } catch (error) {
        console.error('Error al intentar eliminar el usuario:', error);
    }
}

export { delUser };
