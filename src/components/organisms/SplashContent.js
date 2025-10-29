import { View, StyleSheet } from 'react-native';
import Logo from '../molecules/Logo';
import Text from '../atoms/CustomText';

export default function SplashContent() {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>Welcome to TinderApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#ff3b5c',
  },
});
