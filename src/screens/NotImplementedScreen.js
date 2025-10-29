import { StyleSheet, Text, View } from 'react-native';
import SafeScreen from '../components/templates/SafeScreen';
import Header from '../components/organisms/Header';

export default function NotImplementedScreen() {
  return (
    <SafeScreen>
      <Header />
      <View style={styles.container}>
        <Text>Not implemented yet.</Text>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
