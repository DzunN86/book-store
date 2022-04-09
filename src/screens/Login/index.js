import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Input} from '../../components';
import {loginAction} from '../../store/actions';
import {COLORS, images} from '../../themes';
import {EMAIL_REGEX, PASSWORD_REGEX} from '../../utils';
import styles from './styles';

export default function Login({navigation}) {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const {isLoading} = useSelector(state => state.globalReducer);

  const {control, handleSubmit} = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(loginAction(data));
  };

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>
        <Image
          height={70}
          width={70}
          source={images.Logo}
          style={styles.logoImage}
        />
        <View>
          <Text style={styles.title}>Welcome to Book Store</Text>
          {/* <Text style={styles.subTitle}>Please login here</Text> */}
          <View style={styles.form}>
            <Input
              label="Email"
              name="email"
              iconPosition="right"
              placeholder="Enter Email"
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
              }}
            />
            <Input
              label="Password"
              name={'password'}
              iconPosition="right"
              secureTextEntry={isSecureEntry}
              control={control}
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
                pattern: {
                  value: PASSWORD_REGEX,
                  message:
                    'Password must be contain at least 1 letter and 1 number',
                },
              }}
              placeholder="Enter Password"
              icon={
                <TouchableOpacity
                  onPress={() => {
                    setIsSecureEntry(prev => !prev);
                  }}>
                  <Icon
                    name={isSecureEntry ? 'eye-off' : 'eye'}
                    size={24}
                    color={COLORS.gray}
                  />
                </TouchableOpacity>
              }
            />

            <Button
              primary
              title="Login"
              onPress={handleSubmit(onSubmit)}
              loading={isLoading}
              disabled={isLoading}
            />

            <View style={styles.createSection}>
              <Text style={styles.infoText}>Dont have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('RegisterScreen');
                }}>
                <Text style={styles.linkBtn}>REGISTER</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
