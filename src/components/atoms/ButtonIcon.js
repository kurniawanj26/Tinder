import { TouchableOpacity, StyleSheet } from 'react-native';
import Image from './CustomImage';

export default function ButtonIcon({
  name,
  size = 40,
  backgroundColor = '#333',
  onPress,
  style,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.button, { backgroundColor, width: size * 1.8, height: size * 1.8, borderRadius: (size * 1.8) / 2 }, style]}
    >
      <Image source={name} style={{ width: size }} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
});
