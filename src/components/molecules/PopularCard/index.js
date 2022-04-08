import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../../../themes';

export default function PopularCard({item, navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cardWrapper} onPress={navigation}>
        {/* Book Cover */}
        <Image
          source={{uri: item.cover_image}}
          resizeMode="cover"
          style={styles.coverImg}
        />

        <View style={styles.wrapTitle}>
          {/* Book name and author */}
          <View>
            <Text style={styles.nameBook}>{item.title}</Text>
            <Text style={styles.author}>{item.author}</Text>
          </View>

          {/* Book Info */}
          <View style={styles.wrapInfo}>
            <Image
              source={icons.page_filled_icon}
              resizeMode="contain"
              style={styles.iconPublisher}
            />
            <Text style={styles.textInfo}>{item.average_rating}</Text>

            <Image
              source={icons.read_icon}
              resizeMode="contain"
              style={styles.iconPublisher}
            />
            <Text style={styles.textInfo}>{item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Bookmark Button */}
      <TouchableOpacity
        style={styles.wrapperBookmark}
        onPress={() => console.log('Bookmark')}>
        <Image
          source={icons.bookmark_icon}
          resizeMode="contain"
          style={styles.iconBookmark}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginVertical: SIZES.base},
  cardWrapper: {flex: 1, flexDirection: 'row'},
  coverImg: {width: 100, height: 150, borderRadius: 10},
  wrapTitle: {flex: 1, marginLeft: SIZES.radius},
  nameBook: {
    paddingRight: SIZES.padding,
    ...FONTS.h3,
    color: COLORS.white,
  },
  author: {...FONTS.h4, color: COLORS.lightGray3},
  wrapInfo: {flexDirection: 'row', marginTop: SIZES.radius},
  iconPublisher: {
    width: 20,
    height: 20,
    tintColor: COLORS.lightGray,
  },
  textInfo: {
    ...FONTS.body4,
    color: COLORS.lightGray,
    paddingHorizontal: SIZES.radius,
  },
  wrapperBookmark: {position: 'absolute', top: 5, right: 15},
  iconBookmark: {
    width: 25,
    height: 25,
    tintColor: COLORS.lightGray,
  },
});
