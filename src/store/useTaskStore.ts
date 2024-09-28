import { create } from 'zustand';
import { Task } from '../core/entities/task';
import * as TaskUseCases from '../core/use-cases';

export interface TasksState {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  fetchTasksData: () => Promise<void>;
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  removeTask: (id: string) => void;
}

export const useTasksStore = create<TasksState>()(
  (set) => ({
    tasks: [],
    setTasks: (tasks: Task[]) => {
      set({ tasks });
    },
    fetchTasksData: async () => {
      try {
        const resp = await TaskUseCases.getTasksUseCase();
        set({ tasks: resp || [] });
      } catch (error) {
        console.error('Error al obtener tasks:', error);
      }
    },
    addTask: async (task: Task) => {
      try {
        const resp = await TaskUseCases.addTaskUseCase(task);

        if (resp) {
          set((state) => ({
            tasks: [...state.tasks, resp]
          }));
        }
      } catch (error) {
        console.error('Error al agregar task:', error);
      }
    },
    updateTask: async (task: Task) => {
      try {
        const resp = await TaskUseCases.updateTaskUseCase(task);

        if (resp) {
          set((state) => ({
            tasks: state.tasks.map(t =>
              t.id === t.id ? { ...t, ...task } : t
            )
          }));
        }
      } catch (error) {
        console.error('Error al actualizar task:', error);
      }
    },
    removeTask: async (id: string) => {
      try {
        const resp = await TaskUseCases.deleteTaskUseCase(id);

        if (resp) {
          set((state) => ({
            tasks: state.tasks.filter(task => task.id !== id)
          }));
        }
      } catch (error) {
        console.error('Error al eliminar task:', error);
      }
    }
  })
);
