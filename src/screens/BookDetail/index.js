/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BookDesc, BookInfo, BottomButton} from '../../components';
import {COLORS} from '../../themes';

export default function BookDetail({navigation, route}) {
  const {id} = route.params;

  return (
    <View style={styles.container}>
      {/* Book Cover Section */}
      <View style={{flex: 4}}>
        <BookInfo navigation={() => navigation.goBack()} />
      </View>

      {/* Description */}
      <View style={{flex: 2}}>
        <BookDesc />
      </View>

      {/* Buttons */}
      <View style={styles.btnBottom}>
        <BottomButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.black},
  btnBottom: {height: 70, marginBottom: 25},
});
