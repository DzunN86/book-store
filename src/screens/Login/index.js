import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Input} from '../../components';
import {useForm} from '../../hooks';
import {loginAction} from '../../store/actions';
import {COLORS, FONTS, images} from '../../themes';
import {showMessage} from '../../utils';

export default function Login({navigation}) {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const {isLoading} = useSelector(state => state.globalReducer);
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    if (form.email === '' || form.password === '') {
      let inputName = [];
      if (!form.email) {
        inputName.push('email');
      }
      if (!form.password) {
        inputName.push('password');
      }
      showMessage(`Harap melengkapi ${inputName.join(' dan ')}`);
    } else {
      dispatch(loginAction(form));
    }
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
              iconPosition="right"
              placeholder="Enter Email"
              value={form.email}
              onChangeText={value => setForm('email', value)}
            />
            <Input
              label="Password"
              iconPosition="right"
              secureTextEntry={isSecureEntry}
              value={form.password}
              onChangeText={value => setForm('password', value)}
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
            />

            <Button
              primary
              title="Login"
              onPress={onSubmit}
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

const styles = StyleSheet.create({
  scroll: {flexGrow: 1, backgroundColor: COLORS.white},
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  logoImage: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 50,
  },
  title: {
    ...FONTS.h2,
    textAlign: 'center',
    paddingTop: 20,
    color: COLORS.black,
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
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
  },
  linkBtn: {
    marginTop: 7,
    color: COLORS.primary,
    ...FONTS.h3,
  },

  infoText: {
    ...FONTS.body3,
  },
});
