import { StyleSheet, View } from 'react-native';
import { CloseButton } from '../CloseButton';
import { Headline } from '../Headline';

interface Props {
  text: string;
  setVisible: (value: boolean) => void;
}

export const ModalComponentHeader = ({ text, setVisible }: Props) => {
  return (
    <View style={styles.container}>
      <Headline text={text} />
      <CloseButton onPress={() => setVisible(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }
});
