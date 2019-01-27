import * as React from 'react';
import { Button, View } from 'react-native';
import { NEW_RESTAURANT_BUTTON, NEW_RESTAURANT_TEXT_INPUT } from '../constants/testIdNames';

export default class RestaurantsList extends React.Component {
  public render() {
    <View>
      <Button testID={NEW_RESTAURANT_BUTTON} />
    </View>;
  }
}
