import React from 'react';
import Mainstack from './navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';

// STORE
import {store, persistor} from './redux/Store';
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Mainstack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
