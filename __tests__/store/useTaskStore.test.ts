import { act } from 'react-test-renderer';
import { StoreApi, UseBoundStore } from 'zustand';
import * as TaskUseCases from '../../src/core/use-cases';
import { TasksState, useTasksStore } from '../../src/store/useTaskStore';
import { Task } from '../../src/core/entities/task';
import { TaskStatus } from '../../src/interfaces';

jest.mock('../../src/core/use-cases', () => ({
  getTasksUseCase: jest.fn(),
  addTaskUseCase: jest.fn(),
  updateTaskUseCase: jest.fn(),
  deleteTaskUseCase: jest.fn(),
}));

describe('useTasksStore', () => {
  let store: UseBoundStore<StoreApi<TasksState>>;

  beforeEach(() => {
    store = useTasksStore;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('initial state should have empty tasks', () => {
    const tasks = store.getState().tasks;
    expect(tasks).toEqual([]);
  });

  test('fetchTasksData should set tasks from API', async () => {
    const mockTasks = [{ id: '1', title: 'Test Task', body: 'Task body', status: 'Pending' }];
    (TaskUseCases.getTasksUseCase as jest.Mock).mockResolvedValueOnce(mockTasks);

    await act(async () => {
      await store.getState().fetchTasksData();
    });

    expect(store.getState().tasks).toEqual(mockTasks);
    expect(TaskUseCases.getTasksUseCase).toHaveBeenCalled();
  });

  test('addTask should add a new task', async () => {
    const newTask: Task = { id: '2', title: 'New Task', body: 'New Task Body', status: TaskStatus.Pending };
    (TaskUseCases.addTaskUseCase as jest.Mock).mockResolvedValueOnce(newTask);

    await act(async () => {
      await store.getState().addTask(newTask);
    });

    expect(store.getState().tasks).toContainEqual(newTask);
    expect(TaskUseCases.addTaskUseCase).toHaveBeenCalledWith(newTask);
  });

  test('updateTask should update an existing task', async () => {
    const initialTask: Task = { id: '1', title: 'Initial Task', body: 'Initial Body', status: TaskStatus.Pending };
    const updatedTask: Task = { id: '1', title: 'Updated Task', body: 'Updated Body', status: TaskStatus.Completed };

    store.getState().setTasks([initialTask]);

    (TaskUseCases.updateTaskUseCase as jest.Mock).mockResolvedValueOnce(updatedTask);

    await act(async () => {
      await store.getState().updateTask(updatedTask);
    });

    expect(store.getState().tasks).toEqual([updatedTask]);
    expect(TaskUseCases.updateTaskUseCase).toHaveBeenCalledWith(updatedTask);
  });

  test('removeTask should delete a task', async () => {
    const taskToRemove: Task = { id: '3', title: 'Task to Remove', body: 'Body', status: TaskStatus.Pending };

    store.getState().setTasks([taskToRemove]);

    (TaskUseCases.deleteTaskUseCase as jest.Mock).mockResolvedValueOnce(true);

    await act(async () => {
      await store.getState().removeTask(taskToRemove.id!);
    });

    expect(store.getState().tasks).not.toContainEqual(taskToRemove);
    expect(TaskUseCases.deleteTaskUseCase).toHaveBeenCalledWith(taskToRemove.id);
  });
});
