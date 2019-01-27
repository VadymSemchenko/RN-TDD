import React, { Component } from 'react';
import { View } from 'react-native';
import RestaurantsList from './components/RestaurantsList';

export default class App extends Component {
  render() {
    return (
      <View>
        <RestaurantsList />
      </View>
    );
  }
}
