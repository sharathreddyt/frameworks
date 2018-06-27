import React from 'react';

import { View, StyleSheet } from 'react-native';

import { Text, Button } from 'native-base';

const ScreenOne = () => {
  return (
    <View>
      <Text>This is screenOne</Text>

      <Button
        onPress={() =>
          this.props.navigation.navigate('ScreenTwo', { name: 'Lucy' })}
        title="2"
      />
    </View>
  );
};

export default ScreenOne;
