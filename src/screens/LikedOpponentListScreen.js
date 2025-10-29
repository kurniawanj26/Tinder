import { View, StyleSheet } from 'react-native';
import SwipeableScreen from '../components/templates/SwipeableScreen';
import { useLikedOpponentsStore } from '../store/useLikedOpponentsStore';
import SafeScreen from '../components/templates/SafeScreen';
import CustomText from '../components/atoms/CustomText';

export default function LikedOpponentListScreen() {
  const likedOpponents = useLikedOpponentsStore((s) => s.likedOpponents);

  return (
    <SafeScreen>
      {likedOpponents.length > 0 ? (
        <SwipeableScreen data={likedOpponents} />
      ) : (
        <View style={styles.emptyContainer}>
          <CustomText style={styles.emptyText}>
            No liked opponents yet.
          </CustomText>
        </View>
      )}
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
  },
});
