import { View, StyleSheet } from 'react-native';
import Image from '../atoms/CustomImage';
import images from '../../../assets/images';

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image
        source={images.flame}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
});
