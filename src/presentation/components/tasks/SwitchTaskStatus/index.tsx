import { useState } from 'react';
import { StyleSheet, Switch, View } from 'react-native';
import { appColors } from '../../../../theme/colors';
import { Callout } from '../../../ui';
import { Task } from '../../../../core/entities/task';
import { TaskStatus } from '../../../../interfaces';

interface Props {
  task?: Task;
  handleSwitchValue: (value: boolean) => void;
}

export const SwitchTaskStatus = ({ task, handleSwitchValue }: Props) => {
  const [isEnabled, setIsEnabled] = useState(task?.status === TaskStatus.Completed || false);
  const { tertiary, success, warning, white } = appColors;

  const toggleSwitch = () => {
    setIsEnabled(previousState => {
      const newState = !previousState;
      handleSwitchValue(newState);
      return newState;
    });
  };

  return (
    <View style={styles.container}>
      <Callout text={isEnabled ? 'Completada' : 'Pendiente'} />
      <Switch
        trackColor={{ false: tertiary, true: white }}
        thumbColor={isEnabled ? success : warning}
        ios_backgroundColor={white}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', flexDirection: 'row', gap: 15, justifyContent: 'flex-start' }
});
