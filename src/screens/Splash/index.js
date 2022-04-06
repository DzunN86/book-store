import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {images} from '../../themes';
import styles from './styles';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 2000);
  });

  return (
    <View style={styles.container}>
      <Image source={images.Logo} />
      <Text style={styles.logoText}>Book Store</Text>
    </View>
  );
}
