import { Pressable, StyleSheet } from 'react-native';
import { Callout } from '../Callout';
import { appColors } from '../../../theme/colors';
import { appStyles } from '../../../theme/appStyles';

export const EditButton = ({ onPress }: { onPress: () => void; }) => {
  return (
    <Pressable style={[styles.button, appStyles.button]} onPress={onPress}>
      <Callout text='Editar' color={appColors.text} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: appColors.warning,
    borderColor: appColors.text,
    borderWidth: 2
  }
});
