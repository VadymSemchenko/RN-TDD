import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import RestaurantsList from '../components/RestaurantsList';

interface IProps {}
interface IState {}

export default class App extends React.Component<IProps, IState> {
  public render() {
    return (
      <View>
        <RestaurantsList />
      </View>
    );
  }
}
