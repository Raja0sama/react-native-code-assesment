import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {InitialRoutes} from './config/routes';
import {Provider} from 'react-redux';
import store from './global';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <InitialRoutes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
