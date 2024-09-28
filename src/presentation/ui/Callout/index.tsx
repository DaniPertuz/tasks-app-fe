import { StyleSheet, Text } from 'react-native';
import { appColors } from '../../../theme/colors';
import { TextProps } from '../../../interfaces';

export const Callout = ({ text, color }: TextProps) => {
  return (
    <Text style={[styles.body, { color: color ? color : appColors.text }]} numberOfLines={2} ellipsizeMode='tail'>{text}</Text>
  );
};

const styles = StyleSheet.create({
  body: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: -0.24
  }
});
