import { useState } from 'react';
import { Task } from '../../core/entities/task';
import { TaskStatus } from '../../interfaces';
import { useTasksStore } from '../../store/useTaskStore';

interface Props {
  task?: Task;
  setVisible: (value: boolean) => void;
}

export const useModalComponent = ({ task, setVisible }: Props) => {
  const [taskObj, setTaskObj] = useState<Task>(task || {
    title: '',
    body: '',
    status: TaskStatus.Pending
  });
  const addTask = useTasksStore(state => state.addTask);
  const updateTask = useTasksStore(state => state.updateTask);

  const handleTitleChange = (title: string) => {
    setTaskObj(prev => ({ ...prev, title }));
  };

  const handleDescriptionChange = (description: string) => {
    setTaskObj(prev => ({ ...prev, body: description }));
  };

  const handleSwitchChange = (isCompleted: boolean) => {
    console.log({ isCompleted });
    setTaskObj(prev => ({
      ...prev,
      status: isCompleted ? TaskStatus.Completed : TaskStatus.Pending
    }));
  };

  const onSubmit = () => {
    if (task) {
      updateTask(taskObj);
    } else {
      addTask(taskObj);
    }
    setVisible(false);
  };

  return {
    taskObj,
    handleTitleChange,
    handleDescriptionChange,
    handleSwitchChange,
    onSubmit
  };
};
