import { apiURL } from '../../utils/apiURL';
import { Task } from '../entities/task';

export const getTasksUseCase = async (): Promise<Task[] | null> => {
  try {
    const response = await fetch(apiURL + '/tasks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Error al obtener tasks');
    }

    const data = await response.json();
    return data as Task[];
  } catch (error) {
    console.error('Error en getTasksUseCase:', error);
    return null;
  }
}