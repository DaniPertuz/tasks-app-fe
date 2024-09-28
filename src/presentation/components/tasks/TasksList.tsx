import { FlatList, StyleSheet, View } from 'react-native';
import { Task } from '../../../core/entities/task';
import { TasksEmptyMessage } from './TasksEmptyMessage';
import { TasksListItem } from './TasksListItem';
import { appColors } from '../../../theme/colors';

export const TasksList = ({ tasks }: { tasks: Task[]; }) => {
  return (
    <View style={styles.container}>
      {tasks.length === 0
        ?
        <TasksEmptyMessage />
        :
        <FlatList
          data={tasks}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TasksListItem task={item} />
          )}
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: appColors.white, borderRadius: 20 }
});
