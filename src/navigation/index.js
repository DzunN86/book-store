import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  BookDetail,
  Home,
  Login,
  RegisSuccess,
  Register,
  Splash,
} from '../screens';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName={'SplashScreen'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={Splash} />
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="RegisterScreen" component={Register} />
      <Stack.Screen name="RegisSuccessScreen" component={RegisSuccess} />

      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="BookDetailScreen" component={BookDetail} />
    </Stack.Navigator>
  );
}
