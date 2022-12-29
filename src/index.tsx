import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {InitialRoutes} from './config/routes';
import {Provider} from 'react-redux';
import store from './global';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView className={'flex-1'}>
          <InitialRoutes />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
