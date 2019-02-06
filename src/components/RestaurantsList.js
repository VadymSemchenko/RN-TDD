import React, { Component } from 'react';
import { Button, View, FlatList, Text } from 'react-native';
import R from 'ramda';

import AddRestaurantModal from './AddRestaurantModal';
import { NEW_RESTAURANT_BUTTON } from '../../constants/testIDs';

export default class RestaurantsList extends Component {
  state = {
    addModalVisible: false,
    restaurantsNames: [],
  };

  render() {
    const { addModalVisible, restaurantsNames } = this.state;
    console.tron.log('ADD_MODAL_VISIBLE', addModalVisible);
    return (
      <View>
        {R.not(addModalVisible) && (
          <Button
            testID={NEW_RESTAURANT_BUTTON}
            title="Add Restaurant"
            onPress={this.showAddRestaurantModal}
          />
        )}
        <AddRestaurantModal
          visible={addModalVisible}
          handleSaveRestaurant={this.handleSaveRestaurant}
        />
        <FlatList
          data={restaurantsNames}
          keyExtractor={item => `${Date.now()}${item}`}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      </View>
    );
  }

  showAddRestaurantModal = () =>
    // R.not(this.state.addModalVisible) &&
    this.setState(
      R.always({
        addModalVisible: true,
      }),
    );

  handleSaveRestaurant = restaurantName => {
    this.setState(prevState => ({
      restaurantsNames: R.append(restaurantName, prevState.restaurantsNames),
      addModalVisible: R.not(prevState.addModalVisible),
    }));
  };
}
