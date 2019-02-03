import React, { Component } from 'react';
import { View } from 'react-native';
import Config from 'react-native-config';

import { DEVELOPMENT } from '../constants/environmentNames';
import RestaurantsList from './components/RestaurantsList';

const { NODE_ENV } = Config;
if (NODE_ENV === DEVELOPMENT) {
  console.tron = require('../ReactotronConfig').default;
  console.tron.clear();
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
