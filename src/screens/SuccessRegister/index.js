import React from 'react';
import {Image, Text, View} from 'react-native';
import {Button} from '../../components';
import {images} from '../../themes';
import styles from './styles';

export default function RegisterSuccess({navigation}) {
  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} /> */}
      <Image source={images.SuccesRegis} />
      <Text style={styles.title}>Register Success</Text>
      <Text style={styles.Subtitle}>
        We sent email verification to your email
      </Text>
      <View style={styles.buttonWrapper}>
        <Button
          primary
          title="Back to Login"
          onPress={() => navigation.navigate('LoginScreen')}
        />
      </View>
    </View>
  );
}
