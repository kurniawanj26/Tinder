import { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import Logo from '../components/molecules/Logo';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('MainTabs');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Logo />
      <ActivityIndicator size="large" color="#ff3366" style={styles.loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  loading: {
    marginTop: 20,
  },
});
