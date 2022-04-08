import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, FONTS} from '../../../themes';

function Loading() {
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.black} />
      <ActivityIndicator size="large" color={COLORS.primary} />
      <Text style={styles.text}>Loading ...</Text>
    </View>
  );
}

export default Loading;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: COLORS.black,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  text: {
    ...FONTS.body2,
    color: COLORS.primary,
    marginTop: 12,
  },
});
