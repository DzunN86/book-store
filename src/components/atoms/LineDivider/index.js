import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../../themes';

export default function LineDivider() {
  return (
    <View style={styles.main}>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {width: 1, paddingVertical: 5},
  line: {
    flex: 1,
    borderLeftColor: COLORS.lightGray2,
    borderLeftWidth: 1,
  },
});
