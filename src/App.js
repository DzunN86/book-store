import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Navigation from './navigation';
import {Persistore, Store} from './store';

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
      <PersistGate loading={null} persistor={Persistore}>
        <MainApp />
      </PersistGate>
    </Provider>
  );
};

export default App;
