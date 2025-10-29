import { View, StyleSheet, Image, Dimensions } from 'react-native';
import CardInfo from '../molecules/CardInfo';

const { width } = Dimensions.get('screen');

export default function Card({ user }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: user?.photo }} style={styles.image} />
      <CardInfo name={user?.name} age={user?.age} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width,
    height: '85%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
    top: -50,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
