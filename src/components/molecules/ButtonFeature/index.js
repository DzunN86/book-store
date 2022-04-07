/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../../../themes';

export default function ButtonFeature() {
  const LineDivider = () => {
    return (
      <View style={{width: 1, paddingVertical: 18}}>
        <View
          style={{
            flex: 1,
            borderLeftColor: COLORS.lightGray,
            borderLeftWidth: 1,
          }}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          height: 70,
          backgroundColor: COLORS.lightGray4,
          borderRadius: SIZES.radius,
        }}>
        {/* Claim */}
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => console.log('Claim')}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={icons.claim_icon}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
            <Text
              style={{
                marginLeft: SIZES.base,
                ...FONTS.body3,
                color: COLORS.white,
              }}>
              Claim
            </Text>
          </View>
        </TouchableOpacity>

        {/* Divider */}
        <LineDivider />

        {/* Get Point */}
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => console.log('Get Point')}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={icons.point_icon}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
            <Text
              style={{
                marginLeft: SIZES.base,
                ...FONTS.body3,
                color: COLORS.white,
              }}>
              Get Point
            </Text>
          </View>
        </TouchableOpacity>

        {/* Divider */}
        <LineDivider />

        {/* My Card */}
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => console.log('My Card')}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={icons.card_icon}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
            <Text
              style={{
                marginLeft: SIZES.base,
                ...FONTS.body3,
                color: COLORS.white,
              }}>
              My Card
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: SIZES.padding},
});
