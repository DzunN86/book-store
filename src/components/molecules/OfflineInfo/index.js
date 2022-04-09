import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../themes';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

export default function OfflineInfo() {
  const {isOnline} = useSelector(state => state.globalReducer);

  if (isOnline) return null;

  return (
    <View style={styles.container}>
      <Icon name="cloud-offline" size={17} color={COLORS.white} />
      <Text style={styles.infoText}>No Connection</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.danger,
  },
  infoText: {
    ...FONTS.h4,
    color: COLORS.white,
    marginLeft: 8,
  },
});
