import * as React from 'react';
import { Button, View } from 'react-native';
const { NEW_RESTAURANT_BUTTON, NEW_RESTAURANT_TEXT_INPUT } = require('../constants/testIDs');

export default class RestaurantsList extends React.Component {
  public onPress = () => console.log('TEST');
  public render() {
    return (
      <View>
        <Button testID={NEW_RESTAURANT_BUTTON} title="Button" onPress={this.onPress} />
      </View>
    );
  }
}
