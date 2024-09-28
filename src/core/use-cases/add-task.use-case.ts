import { apiURL } from '../../utils/apiURL';
import { Task } from '../entities/task';

export const addTaskUseCase = async (task: Task): Promise<Task | null> => {
  try {
    const response = await fetch(apiURL + '/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    });

    if (!response.ok) {
      throw new Error('Error al crear task');
    }

    const data = await response.json();
    return data as Task;
  } catch (error: any) {
    console.error('Error en addTaskUseCase:', error);
    return null;
  }
};
