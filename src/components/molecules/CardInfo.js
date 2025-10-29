import { View, StyleSheet } from 'react-native';
import Text from '../atoms/CustomText';

export default function CardInfo({ name, age }) {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{name} •</Text>
      <Text style={styles.age}>{age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  age: {
    color: '#fff',
    fontSize: 30,
    marginLeft: 6,
  },
});
