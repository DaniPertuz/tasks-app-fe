import { StyleProp, StyleSheet, TextStyle, View } from 'react-native';
import { appColors } from '../../theme/colors';

interface Props {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export const Layout = ({ children, style }: Props) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.secondary,
    flex: 1,
    padding: 20
  }
});
