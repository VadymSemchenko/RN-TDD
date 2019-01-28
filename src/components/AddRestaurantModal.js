import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import { bool } from 'prop-types';

let Tron;

if (__DEV__) {
  Tron = require('../../ReactotronConfig').default;
}

export default class AddRestaurantModal extends Component {
  static propTypes = {
    visible: bool.isRequired,
  };

  render() {
    // const visibleLens = R.lensProp('visible');
    // const visible = R.view(visibleLens, this.props);
    const { visible } = this.props;
    return visible ? (
      <View>
        <TextInput
          testID="NewRestaurantTextInput"
          placeholder="RestaurantName"
          autoCorrect={false}
        />
        <Button testID="SaveRestaurantButton" title="Save Restaurant" />
      </View>
    ) : null;
  }
}
