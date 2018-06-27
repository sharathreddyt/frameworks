import React from 'react';
import { View, Text } from 'react-native';

class Screen1 extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'hello',
  };
  render() {
    return <Text>Screen1</Text>;
  }
}

export default Screen1;
