import { Pressable, StyleSheet } from 'react-native';
import { Header } from '../Header';
import { appColors } from '../../../theme/colors';

export const AddButton = ({ onPress }: { onPress: () => void; }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Header text='+' color={appColors.white} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: appColors.primary,
    borderRadius: 100,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
    right: 25,
    height: 60,
    width: 60
  }
});
