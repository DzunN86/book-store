import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../../../themes';

export default function BottomButton() {
  return (
    <View style={styles.container}>
      {/* Bookmark */}
      <TouchableOpacity
        style={styles.bookmarkBtn}
        onPress={() => console.log('Bookmark')}>
        <Image
          source={icons.bookmark_icon}
          resizeMode="contain"
          style={styles.bookmarkIcon}
        />
      </TouchableOpacity>

      {/* Start Reading */}
      <TouchableOpacity
        style={styles.startReadingBtn}
        onPress={() => console.log('Start Reading')}>
        <Text style={styles.TextBtn}>Start Reading</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: SIZES.radius,
  },
  bookmarkBtn: {
    width: 60,
    backgroundColor: COLORS.secondary,
    marginLeft: SIZES.radius,
    marginVertical: SIZES.base,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookmarkIcon: {
    width: 25,
    height: 25,
    tintColor: COLORS.lightGray2,
  },
  startReadingBtn: {
    flex: 1,
    backgroundColor: COLORS.primary,
    marginHorizontal: SIZES.base,
    marginVertical: SIZES.base,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextBtn: {...FONTS.h3, color: COLORS.white},
});
