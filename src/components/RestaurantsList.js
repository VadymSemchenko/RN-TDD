import * as React from 'react';
import { Button, View } from 'react-native';
import { NEW_RESTAURANT_BUTTON, NEW_RESTAURANT_TEXT_INPUT } from '../constants/testIDs';

export default class RestaurantsList extends React.Component {
  onPress = () => console.log('TEST');

  render() {
    return (
      <View>
        <Button testID={NEW_RESTAURANT_BUTTON} title="Button" onPress={this.onPress} />
      </View>
    );
  }
}
