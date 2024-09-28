import { Pressable, StyleSheet } from 'react-native';
import { Callout } from '../Callout';
import { appColors } from '../../../theme/colors';
import { appStyles } from '../../../theme/appStyles';

export const DeleteButton = ({ onPress }: { onPress: () => void; }) => {
  return (
    <Pressable style={[styles.button, appStyles.button]} onPress={onPress}>
      <Callout text='Eliminar' color={appColors.white} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: appColors.danger,
    borderColor: appColors.white,
    borderWidth: 2
  }
});
