/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../../../themes';

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
        style={{
          width: 180,
          height: 250,
          borderRadius: 20,
        }}
      />

      {/* Book Info */}
      <View
        style={{
          marginTop: SIZES.radius,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={icons.clock_icon}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.lightGray,
          }}
        />
        <Text style={{marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray}}>
          {item.average_rating}
        </Text>

        <Image
          source={icons.page_icon}
          style={{
            marginLeft: SIZES.radius,
            width: 20,
            height: 20,
            tintColor: COLORS.lightGray,
          }}
        />
        <Text style={{marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray}}>
          {item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
