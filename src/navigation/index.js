import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useSelector} from 'react-redux';
import {
  BookDetail,
  Home,
  Login,
  RegisSuccess,
  Register,
  Splash,
} from '../screens';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={'SplashScreen'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={Splash} />
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="RegisterScreen" component={Register} />
      <Stack.Screen name="RegisSuccessScreen" component={RegisSuccess} />
    </Stack.Navigator>
  );
}

function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={'SplashScreen'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={Splash} />
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="BookDetailScreen" component={BookDetail} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  const {token} = useSelector(state => state.authReducer);
  return <>{token ? <MainNavigator /> : <AuthNavigator />}</>;
}
