// components/templates/SwipeableScreen.js
import { forwardRef, useState, useCallback } from 'react';
import { ScrollView, RefreshControl, StyleSheet } from 'react-native';
import SafeScreen from './SafeScreen';
import SwiperDeck from '../organisms/SwiperDeck';
import Header from '../organisms/Header';
import CustomText from '../atoms/CustomText';

const SwipeableScreen = forwardRef(
  ({ data, onSwipedRight, showActions = false, actions, onRefreshData }, ref) => {
    const [allSwiped, setAllSwiped] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(async () => {
      setRefreshing(true);
      if (onRefreshData) { await onRefreshData(); }
      setTimeout(() => setAllSwiped(false), 400);
      setRefreshing(false);
    }, [onRefreshData]);

    return (
      <SafeScreen>
        <Header />
        {!allSwiped ? (
          <>
            <SwiperDeck
              ref={ref}
              data={data}
              onSwipedRight={onSwipedRight}
              onSwipedAll={() => setAllSwiped(true)}
            />
            {showActions && actions}
          </>
        ) : (
          <ScrollView
            contentContainerStyle={styles.emptyContainer}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          >
            <CustomText style={styles.emptyText}>
              No more cards. Pull to refresh.
            </CustomText>
          </ScrollView>
        )}
      </SafeScreen>
    );
  }
);

export default SwipeableScreen;

const styles = StyleSheet.create({
  emptyContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
});
