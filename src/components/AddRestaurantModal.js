import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { bool } from 'prop-types';
import R from 'ramda';

export default class AddRestaurantModal extends Component {
  static propTypes = {
    visible: bool.isRequired,
  };

  render() {
    const visibleLens = R.lensProp('visible');
    const visible = R.view(visibleLens, this.props);
    return visible ? (
      <View>
        <TextInput testID="NewRestaurantTextInput" />
      </View>
    ) : null;
  }
}
