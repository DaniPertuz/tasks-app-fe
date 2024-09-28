import { Pressable, StyleSheet } from 'react-native';
import { Callout } from '../Callout';
import { appColors } from '../../../theme/colors';
import { appStyles } from '../../../theme/appStyles';

export const SaveButton = ({ onPress }: { onPress: () => void; }) => {
  return (
    <Pressable style={[styles.button, appStyles.button]} onPress={onPress}>
      <Callout text='Guardar' color={appColors.text} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    backgroundColor: appColors.success,
    borderColor: appColors.text,
    borderWidth: 2
  }
});
