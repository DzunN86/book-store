import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../themes';
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  logoText: {
    ...FONTS.h1,
    color: COLORS.white,
    marginTop: 20,
  },
  copyright: {
    ...FONTS.body4,
    color: COLORS.white,
    position: 'absolute',
    bottom: 19,
    letterSpacing: 7,
  },
});
