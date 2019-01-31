import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import { bool, func } from 'prop-types';

let Tron;
if (__DEV__ === true) {
  Tron = require('../../ReactotronConfig').default;
}

export default class AddRestaurantModal extends Component {
  static propTypes = {
    visible: bool.isRequired,
    handleSaveButtonPress: func.isRequired,
  };

  state = {
    restaurantName: '',
  };

  render() {
    const { visible } = this.props;
    return visible ? (
      <View>
        <TextInput
          testID="NewRestaurantTextInput"
          placeholder="RestaurantName"
          autoCorrect={false}
          onChangeText={this.handleChangeText}
        />
        <Button testID="SaveRestaurantButton" title="Save Restaurant" onPress={this.handleSave} />
      </View>
    ) : null;
  }

  // handleAddRestaurant = () => ();

  handleChangeText = restaurantName => this.setState({ restaurantName });

  handleSave = () => {
    const { handleSaveButtonPress } = this.props;
    const { restaurantName } = this.state;
    handleSaveButtonPress(restaurantName);
  };
}
