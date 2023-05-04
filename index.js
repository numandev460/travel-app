/* eslint-disable react/react-in-jsx-scope */
/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './source/Screen/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './source/store/store/store'; // Assuming you have defined your Redux store in this file

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppWrapper);
