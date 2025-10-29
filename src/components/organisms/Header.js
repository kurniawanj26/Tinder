import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Image from '../atoms/CustomImage';
import images from '../../../assets/images';

export default function Header() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Image source={images.flameWithText} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',

  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
});
