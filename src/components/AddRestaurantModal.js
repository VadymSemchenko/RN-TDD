import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import { bool, func } from 'prop-types';
import R from 'ramda';

import { SAVE_RESTAURANT_BUTTON, NEW_RESTAURANT_TEXT_INPUT } from '../../constants/testIDs';

export default class AddRestaurantModal extends Component {
  static propTypes = {
    visible: bool.isRequired,
    handleSaveRestaurant: func.isRequired,
  };

  state = {
    restaurantName: '',
  };

  render() {
    const { visible } = this.props;
    const { restaurantName } = this.state;
    return visible ? (
      <View>
        <Button testID={SAVE_RESTAURANT_BUTTON} title="Save Restaurant" onPress={this.handleSave} />
        <TextInput
          testID={NEW_RESTAURANT_TEXT_INPUT}
          placeholder="RestaurantName"
          autoCorrect={false}
          onChangeText={this.handleChangeText}
          value={restaurantName}
        />
      </View>
    ) : null;
  }

  handleChangeText = restaurantName => this.setState({ restaurantName });

  handleSave = () => {
    const { restaurantName } = this.state;
    if (R.not(restaurantName)) return;
    const { handleSaveRestaurant } = this.props;
    handleSaveRestaurant(restaurantName);
    this.setState({
      restaurantName: '',
    });
  };
}
