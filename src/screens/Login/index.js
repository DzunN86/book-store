import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Button, Input} from '../../components';
import {COLORS, images} from '../../themes';
import Icon from 'react-native-vector-icons/Feather';

export default function Login({navigation}) {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  return (
    <ScrollView>
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
              iconPosition="right"
              placeholder="Enter Email"
              value={null}
            />
            <Input
              label="Password"
              iconPosition="right"
              secureTextEntry={isSecureEntry}
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
              placeholder="Enter Password"
              value={null}
            />

            <Button primary title="Login" />

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

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  logoImage: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: '500',
  },

  subTitle: {
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 20,
    fontWeight: '500',
  },

  form: {
    paddingTop: 20,
  },
  createSection: {
    marginTop: 15,
    flexDirection: 'row',
  },
  linkBtn: {
    paddingLeft: 17,
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: '500',
  },

  infoText: {
    fontSize: 17,
  },
});
