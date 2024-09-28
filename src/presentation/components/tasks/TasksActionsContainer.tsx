import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Task } from '../../../core/entities/task';
import { useTasksStore } from '../../../store/useTaskStore';
import { DeleteButton, EditButton, ModalComponent } from '../../ui';

export const TasksActionsContainer = ({ task }: { task: Task; }) => {
  const [visible, setVisible] = useState(false);
  const removeTask = useTasksStore(state => state.removeTask);
  return (
    <View style={styles.container}>
      <EditButton onPress={() => setVisible(true)} />
      <DeleteButton onPress={() => removeTask(task.id!)} />
      <ModalComponent task={task} visible={visible} setVisible={setVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    gap: 20,
    justifyContent: 'space-between'
  }
});
