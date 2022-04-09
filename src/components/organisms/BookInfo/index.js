/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Share from 'react-native-share';
import {COLORS, FONTS, icons, SIZES} from '../../../themes';
import {showMessage} from '../../../utils';
import {LineDivider} from '../../atoms';

export default function BookInfo({
  navigation,
  title,
  author,
  rating,
  price,
  publisher,
  coverImage,
  totalSale,
}) {
  async function myCustomShare() {
    const shareOptions = {
      message: `Apakah kamu tertarik dengan buku ${title} dengan rating ${rating}/10 `,
    };

    try {
      await Share.open(shareOptions);
    } catch (error) {
      showMessage(error.message);
    }
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: coverImage}}
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
          onPress={() => myCustomShare()}>
          <Icon
            name="sharealt"
            size={25}
            style={{marginRight: 5}}
            color={COLORS.primary}
          />
        </TouchableOpacity>
      </View>

      {/* Book Cover */}
      <View style={styles.bookCover}>
        <Image
          source={{uri: coverImage}}
          resizeMode="contain"
          style={styles.imgCover}
        />
      </View>

      {/* Book Name and Author */}
      <View style={styles.booktitle}>
        <Text style={{...FONTS.h2, color: COLORS.white, textAlign: 'center'}}>
          {title}
        </Text>
        <Text style={{...FONTS.body3, color: COLORS.lightGray3}}>{author}</Text>
      </View>

      {/* Book Info */}
      <View style={styles.bookInfo}>
        {/* Pages */}
        <View style={styles.page}>
          <Text style={{...FONTS.h3, color: COLORS.white}}>{publisher}</Text>
          <Text style={{...FONTS.body4, color: COLORS.lightGray3}}>
            Publisher
          </Text>
        </View>

        <LineDivider />

        {/* Rating */}
        <View style={styles.rating}>
          <View style={styles.wrapperRating}>
            <Icon
              name="star"
              size={15}
              style={{marginRight: 5}}
              color={COLORS.rating}
            />
            <Text style={{...FONTS.h3, color: COLORS.white}}>{rating}</Text>
          </View>
          <Text style={{...FONTS.body4, color: COLORS.lightGray3}}>Rating</Text>
        </View>

        <LineDivider />

        {/* totalSale */}
        <View style={styles.totalSale}>
          <Text style={{...FONTS.h3, color: COLORS.white}}>{totalSale}</Text>
          <Text style={{...FONTS.body4, color: COLORS.lightGray3}}>
            Total Sale
          </Text>
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
    height: 45,
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
    marginTop: 10,
  },
  bookInfo: {
    flexDirection: 'row',
    paddingVertical: 20,
    margin: SIZES.padding,
    borderRadius: SIZES.radius,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  rating: {flex: 1, alignItems: 'center'},
  wrapperRating: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  page: {
    flex: 1,
    paddingHorizontal: SIZES.radius,
    alignItems: 'center',
  },
  totalSale: {flex: 1, alignItems: 'center'},
});
