import { apiURL } from '../../utils/apiURL';
import { Task } from '../entities/task';

export const deleteTaskUseCase = async (id: string): Promise<Task | null> => {
  try {
    const response = await fetch(apiURL + `/tasks/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Error al eliminar task');
    }

    const data = await response.json();
    return data as Task;
  } catch (error) {
    console.error('Error en deleteTaskUseCase:', error);
    return null;
  }
}
