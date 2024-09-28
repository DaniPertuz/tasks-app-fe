import { StyleSheet, Text } from 'react-native';
import { appColors } from '../../../theme/colors';
import { TextProps } from '../../../interfaces';

export const Header = ({ text, color }: TextProps) => {
  return (
    <Text style={[styles.body, { color: color ? color : appColors.text }]} numberOfLines={2} ellipsizeMode='tail'>{text}</Text>
  );
};

const styles = StyleSheet.create({
  body: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 30,
    letterSpacing: -0.24
  }
});
