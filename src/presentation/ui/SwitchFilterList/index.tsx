import { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import { appColors } from '../../../theme/colors';
import { Callout } from '../Callout';

interface Props {
  handleSwitchValue: (value: boolean) => void;
}

export const SwitchFilterList = ({ handleSwitchValue }: Props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const { quaternary, tertiary, success, warning } = appColors;

  const toggleSwitch = () => {
    setIsEnabled(previousState => {
      const newState = !previousState;
      handleSwitchValue(newState);
      return newState;
    });
  };

  return (
    <View style={styles.container}>
      <Callout text={isEnabled ? 'Completadas' : 'Pendientes'} />
      <Switch
        trackColor={{ false: tertiary, true: quaternary }}
        thumbColor={isEnabled ? success : warning}
        ios_backgroundColor={quaternary}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', flexDirection: 'row', gap: 10, justifyContent: 'space-between' }
});
