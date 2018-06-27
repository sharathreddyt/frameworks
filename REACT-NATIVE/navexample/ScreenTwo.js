import React from 'react';

import { View, StyleSheet } from 'react-native';

import { Text, Button } from 'native-base';

export default (ScreenTwo = () => {
  return (
    <View>
      <Text>This is screenOne</Text>

      <Button
        onPress={() =>
          this.props.navigation.navigate('ScreenOne', { name: 'Lucy' })}
        title="1"
      />
    </View>
  );
});
