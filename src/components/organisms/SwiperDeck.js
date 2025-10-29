import { forwardRef, useImperativeHandle, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Card from './Card';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getSwiperHeight } from '../../utils/constants';

const SwiperDeck = forwardRef(({ data, onSwipedRight, onSwipedAll }, ref) => {
  const insets = useSafeAreaInsets();
  const swiperHeight = getSwiperHeight(insets.bottom);
  const swiperRef = useRef(null);

  useImperativeHandle(ref, () => ({
    swipeLeft: () => swiperRef.current?.swipeLeft(),
    swipeRight: () => swiperRef.current?.swipeRight(),
    swipeBack: () => swiperRef.current?.swipeBack(),
  }));

  return (
    <View style={[styles.container, { height: swiperHeight }]}>
      <Swiper
        ref={swiperRef}
        cards={data}
        renderCard={(user) => <Card user={user} height={swiperHeight * 0.9} />}
        cardIndex={0}
        stackSize={3}
        stackScale={5}
        stackSeparation={12}
        backgroundColor="transparent"
        onSwipedRight={onSwipedRight}
        onSwipedAll={() => {
          onSwipedAll?.();
        }}
        animateCardOpacity={true}
        disableTopSwipe
        disableBottomSwipe
        infinite={false}
        overlayLabels={{
          left: {
            title: 'NOPE',
            style: {
              label: {
                backgroundColor: 'transparent',
                borderColor: '#FF4D4D',
                color: '#FF4D4D',
                borderWidth: 3,
                fontSize: 32,
                fontWeight: 'bold',
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 6,
                transform: [{ rotate: '15deg' }],
                textAlign: 'center',
              },
              wrapper: {
                position: 'absolute',
                top: 30,
                right: 25,
                maxWidth: '40%',
              },
            },
          },
          right: {
            title: 'LIKE',
            style: {
              label: {
                backgroundColor: 'transparent',
                borderColor: '#4CAF50',
                color: '#4CAF50',
                borderWidth: 3,
                fontSize: 32,
                fontWeight: 'bold',
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 6,
                transform: [{ rotate: '-15deg' }],
                textAlign: 'center',
              },
              wrapper: {
                position: 'absolute',
                top: 30,
                left: 25,
                maxWidth: '40%',
              },
            },
          },
        }}
      />
    </View>
  );
});

export default SwiperDeck;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
