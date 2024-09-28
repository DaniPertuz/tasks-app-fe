import { StyleSheet, TextInput } from 'react-native';
import { appColors } from '../../../theme/colors';

interface Props {
  placeholder?: string;
  value: string;
  onChangeText: (value: string) => void;
}

export const TextInputComponent = ({ placeholder, value, onChangeText }: Props) => {
  return (
    <TextInput
      numberOfLines={1}
      multiline={false}
      cursorColor={appColors.primary}
      placeholder={placeholder}
      placeholderTextColor={appColors.tertiary}
      style={styles.container}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: appColors.white, borderRadius: 10, color: appColors.text, padding: 10 }
});
