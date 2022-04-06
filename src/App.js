import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import Navigation from './navigation';
import {Store} from './store';

const MainApp = () => {
  return (
    <NavigationContainer>
      <Navigation />
      <FlashMessage position="bottom" />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={Store}>
      <MainApp />
    </Provider>
  );
};

export default App;
