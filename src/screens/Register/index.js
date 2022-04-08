import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Header, Input} from '../../components';
import {useForm} from '../../hooks';
import {registerAction} from '../../store/actions';
import {COLORS} from '../../themes';
import {showMessage} from '../../utils';
import styles from './styles';

export default function Register({navigation}) {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const {isLoading} = useSelector(state => state.globalReducer);
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    if (form.email === '' || form.email === '' || form.password === '') {
      let inputName = [];
      if (!form.name) {
        inputName.push('Full Name');
      }
      if (!form.email) {
        inputName.push('Email');
      }
      if (!form.password) {
        inputName.push('Password');
      }
      showMessage(`Harap melengkapi ${inputName.join(', ')}`);
    } else {
      dispatch(registerAction(form, navigation));
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.page}>
        <Header
          title="Register"
          subTitle="Register and reading"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <View>
            <Input
              label="Full Name"
              iconPosition="right"
              placeholder="Full Name"
              value={form.name}
              onChangeText={value => setForm('name', value)}
            />
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
              value={form.password}
              onChangeText={value => setForm('password', value)}
            />

            <Button
              primary
              title="Register"
              onPress={onSubmit}
              loading={isLoading}
              disabled={isLoading}
            />

            <View style={styles.createSection}>
              <Text style={styles.infoText}>Already have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('LoginScreen');
                }}>
                <Text style={styles.linkBtn}>LOGIN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
