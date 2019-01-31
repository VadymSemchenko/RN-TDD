import React, { Component } from 'react';
import { View } from 'react-native';

import RestaurantsList from './components/RestaurantsList';

// let Tron;
// if (__DEV__) {
//   Tron = require('../ReactotronConfig').default;
//   Tron.warn('APP HAS STARTED!');
// }

export default class App extends Component {
  render() {
    return (
      <View>
        <RestaurantsList />
      </View>
    );
  }
}
