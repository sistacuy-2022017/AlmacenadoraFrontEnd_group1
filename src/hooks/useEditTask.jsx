import { toast } from 'react-hot-toast';
import { changeData } from '../services/api.jsx';

export const useChangeTask = () => {
  const changeTask = async (id, updatedTask) => {
    try {
      const response = await changeData(id, updatedTask);
      console.log('Tarea actualizada correctamente:', response);
      toast.success('Tarea actualizada correctamente');
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
      toast.error('Error al actualizar la tarea');
    }
  };

  return { changeTask };
}