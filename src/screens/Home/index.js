import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {logout} from '../../store/actions';
import {useDispatch} from 'react-redux';

export default function Home({navigation}) {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Logout" onPress={onLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
