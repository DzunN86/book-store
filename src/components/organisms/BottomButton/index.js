import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS, FONTS, SIZES} from '../../../themes';
import {
  buatChannel,
  cancelAllLocalNotifications,
  configure,
  kirimNotifikasi,
} from '../../../utils';

export default function BottomButton({price, bookTitle}) {
  const hargaConvert = `Rp. ${parseFloat(price).toLocaleString('id-ID')}`;

  const notification = () => {
    configure();
    buatChannel('1');
    cancelAllLocalNotifications();
    kirimNotifikasi('1', `Kamu Menyukai ${bookTitle}`, 'Terima Kasih');
  };
  return (
    <View style={styles.container}>
      {/* Bookmark */}
      <TouchableOpacity
        style={styles.bookmarkBtn}
        onPress={() => notification()}>
        <Icon name="hearto" size={25} color={COLORS.danger} />
      </TouchableOpacity>

      {/* Start Reading */}
      <TouchableOpacity
        style={styles.startReadingBtn}
        onPress={() => console.log('Start Reading')}>
        <Text style={styles.TextBtn}>Buy {hargaConvert}</Text>
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
