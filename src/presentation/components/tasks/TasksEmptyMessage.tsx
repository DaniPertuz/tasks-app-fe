import { StyleSheet, View } from 'react-native';
import { Body } from '../../ui';

export const TasksEmptyMessage = () => {
  return (
    <View style={styles.container}>
      <Body text='No hay tasks...' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});
