import { View, StyleSheet } from 'react-native';
import ButtonIcon from '../atoms/ButtonIcon';
import images from '../../../assets/images';

export default function CardActions({
  onDislike,
  onRewind,
  onStar,
  onLike,
  onMessage,
}) {
  return (
    <View style={styles.container}>

      {/* Rewind */}
      <ButtonIcon
        name={images.undo}
        size={26}
        backgroundColor="#fff"
        onPress={onRewind}
      />

      {/* Nope */}
      <ButtonIcon
        name={images.nope}
        size={36}
        backgroundColor="#fff"
        onPress={onDislike}
      />

      {/* Star */}
      <ButtonIcon
        name={images.star}
        size={26}
        backgroundColor="#fff"
        onPress={onStar}
      />

      {/* Like */}
      <ButtonIcon
        name={images.like}
        size={36}
        backgroundColor="#fff"
        onPress={onLike}
      />

      {/* Message */}
      <ButtonIcon
        name={images.paperPlane}
        size={26}
        backgroundColor="#fff"
        onPress={onMessage}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -1,
    zIndex: 10,
    left: 30,
    right: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
  },
});
