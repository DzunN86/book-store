/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, Animated, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../../themes';

export default function BookDesc() {
  const [scrollViewWholeHeight, setScrollViewWholeHeight] = useState(1);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = useState(0);

  const indicator = new Animated.Value(0);
  const indicatorSize =
    scrollViewWholeHeight > scrollViewVisibleHeight
      ? (scrollViewVisibleHeight * scrollViewVisibleHeight) /
        scrollViewWholeHeight
      : scrollViewVisibleHeight;

  const difference =
    scrollViewVisibleHeight > indicatorSize
      ? scrollViewVisibleHeight - indicatorSize
      : 1;

  return (
    <View style={styles.container}>
      {/* Custom Scrollbar */}
      <View style={styles.mainScrollbar}>
        <Animated.View
          style={{
            width: 4,
            height: indicatorSize,
            backgroundColor: COLORS.lightGray4,
            transform: [
              {
                translateY: Animated.multiply(
                  indicator,
                  scrollViewVisibleHeight / scrollViewWholeHeight,
                ).interpolate({
                  inputRange: [0, difference],
                  outputRange: [0, difference],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
        />
      </View>

      {/* Description */}
      <ScrollView
        contentContainerStyle={{paddingLeft: SIZES.padding}}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onContentSizeChange={(width, height) => {
          setScrollViewWholeHeight(height);
        }}
        onLayout={({
          nativeEvent: {
            layout: {x, y, width, height},
          },
        }) => {
          setScrollViewVisibleHeight(height);
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: indicator}}}],
          {useNativeDriver: false},
        )}>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.white,
            marginBottom: SIZES.padding,
          }}>
          Synopsis
        </Text>
        <Text
          style={{
            ...FONTS.body3,
            color: COLORS.lightGray3,
            textAlign: 'justify',
          }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
          possimus dolorem rerum, distinctio mollitia error, tempora, veniam
          nihil fugit vero doloribus libero laborum atque! Eum porro ab ut
          voluptate illo!
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'row', padding: SIZES.padding},
  mainScrollbar: {width: 4, height: '100%', backgroundColor: COLORS.gray1},
});
