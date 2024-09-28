import { useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { SwitchTaskStatus } from '../../components/tasks/SwitchTaskStatus';
import { Task } from '../../../core/entities/task';
import { ModalComponentHeader } from './ModalComponentHeader';
import { SaveButton } from '../SaveButton';
import { TextInputComponent } from '../TextInputComponent';
import { appColors } from '../../../theme/colors';
import { useTasksStore } from '../../../store/useTaskStore';
import { TaskStatus } from '../../../interfaces';

interface Props {
  task?: Task;
  visible: boolean;
  setVisible: (value: boolean) => void;
}

export const ModalComponent = ({ task, visible, setVisible }: Props) => {
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
    console.log({isCompleted})
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
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ModalComponentHeader text={task ? 'Actualizar' : 'Agregar'} setVisible={setVisible} />
          <TextInputComponent placeholder={'Título'} onChangeText={handleTitleChange} value={taskObj?.title || ''} />
          <TextInputComponent placeholder={'Descripción'} onChangeText={handleDescriptionChange} value={taskObj?.body || ''} />
          <SwitchTaskStatus task={task} handleSwitchValue={handleSwitchChange} />
          <SaveButton onPress={onSubmit} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    flex: 1,
    justifyContent: 'center'
  },
  modalContent: {
    backgroundColor: appColors.quaternary,
    borderRadius: 20,
    gap: 20,
    margin: 30,
    padding: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
});
