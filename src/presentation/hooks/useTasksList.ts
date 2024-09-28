import { useEffect, useState } from 'react';
import { Task } from '../../core/entities/task';
import { TaskStatus } from '../../interfaces';
import { useTasksStore } from '../../store/useTaskStore';

export const useTasksList = () => {
  const tasks = useTasksStore(state => state.tasks);
  const fetchTasksData = useTasksStore(state => state.fetchTasksData);
  const [tasksList, setTasksList] = useState<Task[]>(tasks);
  const [visible, setVisible] = useState(false);
  const [filterCompleted, setFilterCompleted] = useState<boolean | null>(null);

  const filterTasks = (taskList: Task[]) => {
    if (filterCompleted === null) {
      return taskList;
    }
    return taskList.filter(task => 
      filterCompleted ? task.status === TaskStatus.Completed : task.status === TaskStatus.Pending
    );
  };

  useEffect(() => {
    setTasksList(filterTasks(tasks));
  }, [tasks, filterCompleted]);

  const filterTaskList = (value: boolean) => {
    setFilterCompleted(value);
  };

  useEffect(() => {
    fetchTasksData();
  }, []);

  return {
    tasksList,
    visible,
    filterTaskList,
    setVisible
  };
};
