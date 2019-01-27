import * as React from 'react';
import { Button, View } from 'react-native';
import AddRestaurantModal from './AddRestaurantModal';
import { always } from 'ramda';

export default class RestaurantsList extends React.Component {
  state = {
    addModalVisible: false,
  };

  onPress = always(null);

  render() {
    const { addModalVisible } = this.state;
    return (
      <View>
        <Button testID="NewRestaurantButton" title="Button" onPress={this.onPress} />
        <AddRestaurantModal visible={addModalVisible} />
      </View>
    );
  }
}
