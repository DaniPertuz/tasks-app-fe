import { StyleSheet, View } from 'react-native';

export const TasksTextContainer = ({ children }: { children: React.ReactNode | React.ReactNode[]; }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    gap: 10
  }
});
