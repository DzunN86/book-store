import NetInfo from '@react-native-community/netinfo';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import FlashMessage from 'react-native-flash-message';
import {Provider, useDispatch} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {OfflineInfo} from './components';
import Navigation from './navigation';
import {Persistore, Store} from './store';
import {setOnline} from './store/actions';

const MainApp = () => {
  const dispatch = useDispatch();

  const removeNetInfo = () => {
    NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      dispatch(setOnline(!offline));
    });
  };

  useEffect(() => {
    removeNetInfo();
    return () => {
      removeNetInfo();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavigationContainer>
      <Navigation />
      <FlashMessage position="top" />
      <OfflineInfo />
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
