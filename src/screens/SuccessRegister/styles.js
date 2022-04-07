import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../themes';
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  title: {
    ...FONTS.h2,
    color: '#020202',
    marginTop: 20,
    textAlign: 'center',
  },
  Subtitle: {
    ...FONTS.body3,
    color: COLORS.gray,
    marginTop: 20,
    textAlign: 'center',
  },
  buttonWrapper: {
    width: SIZES.width * 0.9,
    position: 'absolute',
    bottom: 19,
  },
});
