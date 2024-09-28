import { Pressable, StyleSheet } from 'react-native';
import { appColors } from '../../../theme/colors';
import { Headline } from '../Headline';

export const CloseButton = ({ onPress }: { onPress: () => void; }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Headline text='X' color={appColors.white} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: appColors.danger,
    borderColor: appColors.white,
    borderRadius: 50,
    height: 40,
    padding: 10,
    width: 40
  }
});
