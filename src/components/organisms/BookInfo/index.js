import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, images, SIZES} from '../../../themes';
import {LineDivider} from '../../atoms';

export default function BookInfo({navigation, title, author, rating, price}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.theMetropolist}
        resizeMode="cover"
        style={styles.floatImg}
      />

      {/* Color Overlay */}
      <View style={styles.overlay} />

      {/* Navigation header */}
      <View style={styles.navigation}>
        <TouchableOpacity style={{marginLeft: SIZES.base}} onPress={navigation}>
          <Image
            source={icons.back_arrow_icon}
            resizeMode="contain"
            style={styles.iconBack}
          />
        </TouchableOpacity>

        <View style={styles.titleHeader}>
          <Text style={{...FONTS.h3, color: COLORS.primary}}>Book Detail</Text>
        </View>

        <TouchableOpacity
          style={{marginRigth: SIZES.base}}
          onPress={() => console.log('Click More')}>
          <Image
            source={icons.more_icon}
            resizeMode="contain"
            style={styles.iconMore}
          />
        </TouchableOpacity>
      </View>

      {/* Book Cover */}
      <View style={styles.bookCover}>
        <Image
          source={images.theMetropolist}
          resizeMode="contain"
          style={styles.imgCover}
        />
      </View>

      {/* Book Name and Author */}
      <View style={styles.booktitle}>
        <Text style={{...FONTS.h2, color: COLORS.white}}>
          {'Book Title dah oke'}
        </Text>
        <Text style={{...FONTS.body3, color: COLORS.white}}>
          {'book.author'}
        </Text>
      </View>

      {/* Book Info */}
      <View style={styles.bookInfo}>
        {/* Rating */}
        <View style={styles.rating}>
          <Text style={{...FONTS.h3, color: COLORS.white}}>
            {'book.rating'}
          </Text>
          <Text style={{...FONTS.body4, color: COLORS.white}}>Rating</Text>
        </View>

        <LineDivider />

        {/* Pages */}
        <View style={styles.page}>
          <Text style={{...FONTS.h3, color: COLORS.white}}>
            {'book.pageNo'}
          </Text>
          <Text style={{...FONTS.body4, color: COLORS.white}}>
            Number of Page
          </Text>
        </View>

        <LineDivider />

        {/* Language */}
        <View style={styles.language}>
          <Text style={{...FONTS.h3, color: COLORS.white}}>{'book.lan'}</Text>
          <Text style={{...FONTS.body4, color: COLORS.white}}>Language</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  floatImg: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: COLORS.transparent,
  },
  navigation: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.radius,
    height: 80,
    alignItems: 'flex-end',
  },
  iconBack: {
    width: 25,
    height: 25,
    tintColor: COLORS.primary,
  },
  titleHeader: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  iconMore: {
    width: 30,
    height: 30,
    tintColor: COLORS.primary,
    alignSelf: 'flex-end',
  },
  bookCover: {flex: 5, paddingTop: SIZES.padding2, alignItems: 'center'},
  imgCover: {
    flex: 1,
    width: 150,
    height: 'auto',
  },
  booktitle: {
    flex: 1.8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  bookInfo: {
    flexDirection: 'row',
    paddingVertical: 20,
    margin: SIZES.padding,
    borderRadius: SIZES.radius,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  rating: {flex: 1, alignItems: 'center'},
  page: {
    flex: 1,
    paddingHorizontal: SIZES.radius,
    alignItems: 'center',
  },
  language: {flex: 1, alignItems: 'center'},
});
