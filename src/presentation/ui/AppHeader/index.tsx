import { StyleSheet, View } from 'react-native';
import { Header } from '../Header';
import { SwitchFilterList } from '../SwitchFilterList';

export const AppHeader = ({ filterTaskList }: { filterTaskList: (value: boolean) => void; }) => {
  return (
    <View style={styles.headerContainer}>
      <Header text='TasksApp' />
      <SwitchFilterList handleSwitchValue={filterTaskList} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: { alignItems: 'center', gap: 20 }
});
