import { apiURL } from '../../utils/apiURL';
import { Task } from '../entities/task';

export const updateTaskUseCase = async (task: Task): Promise<Task | null> => {
  try {
    const response = await fetch(apiURL + `/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    });

    if (!response.ok) {
      throw new Error('Error al actualizar task');
    }

    const data = await response.json();
    return data as Task;
  } catch (error) {
    console.error('Error en updateTaskUseCase:', error);
    return null;
  }
}
