import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

class Screen3 extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'skyblue' }}>
        <Text>Screen3</Text>
        <Button
          title="Go"
          onPress={() => {
            this.props.navigation.navigate('Go');
          }}
        />
        <Button
          title="reset"
          onPress={() => {
            this.props.navigation.dispatch(
              NavigationActions.reset({
                index: 0,
                key: null,
                actions: [
                  NavigationActions.navigate({
                    routeName: 'Go',
                  }),
                ],
              }),
            );
          }}
        />
      </View>
    );
  }
}

export default Screen3;
