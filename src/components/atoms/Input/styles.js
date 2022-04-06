import {StyleSheet} from 'react-native';
import {COLORS} from '../../../themes';

export default StyleSheet.create({
  wrapper: {
    height: 45,
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 10,

    marginTop: 5,
  },

  inputContainer: {
    paddingVertical: 12,
  },

  textInput: {
    flex: 1,
    width: '100%',
  },

  error: {
    color: COLORS.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
