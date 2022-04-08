import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../themes';

export default StyleSheet.create({
  scroll: {flexGrow: 1, backgroundColor: COLORS.lightGray2},
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 15,
    flex: 1,
  },
  logoImage: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: '500',
  },

  subTitle: {
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 20,
    fontWeight: '500',
  },
  createSection: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkBtn: {
    marginTop: 7,
    color: COLORS.primary,
    ...FONTS.h3,
  },

  infoText: {
    fontSize: 17,
  },
});
