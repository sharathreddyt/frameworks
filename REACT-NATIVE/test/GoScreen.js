import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class GoScreen extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#AA3939' }}>
        <Text>Go screen</Text>
        <Button
          title="screen2"
          onPress={() => {
            this.props.navigation.navigate('Screen2');
          }}
        />
      </View>
    );
  }
}

export default GoScreen;
