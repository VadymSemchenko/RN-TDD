import React, { Component } from 'react';
import { View } from 'react-native';
import Config from 'react-native-config';

import RestaurantsList from './components/RestaurantsList';

let Tron;
if (__DEV__) {
  Tron = require('../ReactotronConfig').default;
  Tron.clear();
  Tron.log('Node Env = ', Config.NODE_ENV);
}

export default class App extends Component {
  render() {
    return (
      <View>
        <RestaurantsList />
      </View>
    );
  }
}
