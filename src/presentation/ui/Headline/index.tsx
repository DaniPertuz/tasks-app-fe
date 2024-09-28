import { StyleSheet, Text } from 'react-native';
import { appColors } from '../../../theme/colors';
import { TextProps } from '../../../interfaces';

export const Headline = ({ text, color }: TextProps) => {
  return (
    <Text style={[styles.headline, { color: color ? color : appColors.text }]} numberOfLines={2} ellipsizeMode='tail'>{text}</Text>
  );
};

const styles = StyleSheet.create({
  headline: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: -0.24
  }
});
