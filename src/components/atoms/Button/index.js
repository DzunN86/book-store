/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ActivityIndicator, Text, View, TouchableOpacity} from 'react-native';
import {COLORS} from '../../../themes';
import styles from './styles';

const Button = ({
  title,
  secondary,
  primary,
  danger,
  disabled,
  loading,
  onPress,
  style,
}) => {
  const getBgColor = () => {
    if (disabled) {
      return COLORS.lightGray3;
    }
    if (primary) {
      return COLORS.primary;
    }
    if (danger) {
      return COLORS.danger;
    }

    if (secondary) {
      return COLORS.secondary;
    }
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.wrapper, {backgroundColor: getBgColor()}, style]}>
      <View style={[styles.loaderSection]}>
        {loading && (
          <ActivityIndicator color={primary ? COLORS.black : COLORS.primary} />
        )}
        {title && (
          <Text
            style={{
              color: disabled ? 'black' : COLORS.white,
              paddingLeft: loading ? 5 : 0,
            }}>
            {loading ? 'Please wait...' : title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
