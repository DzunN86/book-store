import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS} from '../../../themes';

function ErrorConnection() {
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.primary} />
      <View style={styles.Container}>
        <Text style={styles.Title}>Connection Error</Text>
        <Text style={styles.Text}>
          Oops! Looks like your device is not connected to the Internet.
        </Text>
      </View>
    </View>
  );
}

export default ErrorConnection;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },

  Container: {
    backgroundColor: COLORS.black,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: 'center',
    borderRadius: 20,
  },
  Title: {
    ...FONTS.h2,
    color: COLORS.white,
  },
  Text: {
    ...FONTS.body2,
    color: COLORS.white,
    marginTop: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
});
