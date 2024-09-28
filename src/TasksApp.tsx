import { StyleSheet } from 'react-native';
import { TasksList } from './presentation/components/tasks/TasksList';
import { AddButton, AppHeader, Layout, ModalComponent } from './presentation/ui';
import { useTasksList } from './presentation/hooks/useTasksList';

export const TasksApp = () => {
  const { tasksList, visible, filterTaskList, setVisible } = useTasksList();

  return (
    <Layout style={styles.container}>
      <AppHeader filterTaskList={filterTaskList} />
      <TasksList tasks={tasksList} />
      <AddButton onPress={() => setVisible(true)} />
      <ModalComponent visible={visible} setVisible={setVisible} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: { gap: 20 }
});
