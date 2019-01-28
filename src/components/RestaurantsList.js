import React, { Component } from 'react';
import { Button, View } from 'react-native';
import AddRestaurantModal from './AddRestaurantModal';
import R from 'ramda';

export default class RestaurantsList extends Component {
  state = {
    addModalVisible: false,
  };

  showAddRestaurantModal = () =>
    R.not(this.state.addModalVisible) &&
    this.setState({
      addModalVisible: true,
    });

  render() {
    const { addModalVisible } = this.state;
    return (
      <View>
        <Button
          testID="NewRestaurantButton"
          title="Add Restaurant"
          onPress={this.showAddRestaurantModal}
        />
        <AddRestaurantModal visible={addModalVisible} />
      </View>
    );
  }
}
