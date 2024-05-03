import axios from 'axios';

const baseUrl = 'http://localhost:3001/apiAlmacenadora/v1/warehousing';

export const createTask = async (newTodo) => {
    try {
        const response = await axios.post(`${baseUrl}/createTask`, newTodo);
        return response.data;
    } catch (error) {
        throw new Error('Error al agregar la tarea: ', error);
    }
};

export const getTask = async () => {
    try {
        const response = await axios.get(`${baseUrl}/getTask`);
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener la tarea: ', error);
    }
};


export const changeData = async (id, updatedTask) => {
    try {
        const response = await axios.put(`${baseUrl}/updateTask/${id}`, updatedTask);
        return response.data;
    } catch (error) {
        throw new Error('Error al actualizar la tarea: ', error);
    }
}

export const deleteTaskes = async (id) => {
    try {
        const response = await axios.delete(`${baseUrl}/deleteTask/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error al eliminar la tarea: ', error);
    }
};

