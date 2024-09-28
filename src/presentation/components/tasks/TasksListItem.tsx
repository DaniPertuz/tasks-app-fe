import { StyleSheet, View } from 'react-native';
import { Task } from '../../../core/entities/task';
import { TaskStatus } from '../../../interfaces';
import { Body, Callout, Headline } from '../../ui';
import { TasksTextContainer } from './TasksTextContainer';
import { TasksActionsContainer } from './TasksActionsContainer';
import { appColors } from '../../../theme/colors';

export const TasksListItem = ({ task }: { task: Task; }) => {
  const color = task.status === TaskStatus.Completed ? appColors.primary : appColors.danger;
  const text = task.status === TaskStatus.Completed ? 'Completada' : 'Pendiente';

  return (
    <View style={styles.container}>
      <TasksTextContainer>
        <Headline text={task.title} />
        <Body text={task.body} />
        <Callout text={text} color={color} />
      </TasksTextContainer>
      <TasksActionsContainer task={task} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.quaternary,
    borderColor: appColors.primary,
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: 'row',
    gap: 10,
    margin: 10,
    padding: 10
  }
});
