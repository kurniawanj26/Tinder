import { Dimensions, Platform, StatusBar } from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('screen');

export const HEADER_HEIGHT = 80;
export const TAB_BAR_DEFAULT = 70;
export const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 44 : StatusBar.currentHeight || 0;

// calculate swiper
export const getSwiperHeight = (bottomInset = 0) => {
  return SCREEN_HEIGHT - HEADER_HEIGHT - STATUS_BAR_HEIGHT - bottomInset - TAB_BAR_DEFAULT;
};
