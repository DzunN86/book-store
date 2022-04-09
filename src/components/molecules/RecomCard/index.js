/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../themes';

export default function RecomCard({index, item, navigation}) {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        marginLeft: index === 0 ? SIZES.padding : 0,
        marginRight: SIZES.radius,
      }}
      onPress={navigation}>
      {/* Book Cover */}
      <Image
        source={{uri: item.cover_image}}
        resizeMode="cover"
        style={styles.coverImg}
      />

      {/* Book Info */}
      {/* <View style={styles.wrapperInfo}>
        <Text style={styles.bookName}>{item.title}</Text>
      </View> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  coverImg: {
    width: 180,
    height: 250,
    borderRadius: 20,
  },
  wrapperInfo: {
    marginTop: SIZES.radius,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookName: {
    marginLeft: 5,
    ...FONTS.h3,
    color: COLORS.lightGray2,
  },
});
