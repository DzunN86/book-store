import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function RegisterSuccess() {
  return (
    <View style={styles.container}>
      <Text>Register Success</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
