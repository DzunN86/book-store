/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {COLORS} from '../../../themes';
import styles from './styles';
import {Controller} from 'react-hook-form';

const Input = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  onChangeText,
  iconPosition,
  icon,
  style,
  label,
  ...props
}) => {
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <View style={styles.inputContainer}>
          {label && <Text>{label}</Text>}

          <View
            style={[
              styles.wrapper,
              {
                alignItems: icon ? 'center' : 'baseline',
                borderColor: error ? COLORS.red : COLORS.gray,
              },
              {
                flexDirection: getFlexDirection(),
              },
            ]}>
            <View>{icon && icon}</View>

            <TextInput
              style={[styles.textInput, style]}
              onChangeText={onChange}
              placeholder={placeholder}
              value={value}
              onBlur={onBlur}
              secureTextEntry={secureTextEntry}
              {...props}
            />
          </View>

          {error && (
            <Text style={styles.error}>{error.message || 'Error'}</Text>
          )}
        </View>
      )}
    />
  );
};

export default Input;
