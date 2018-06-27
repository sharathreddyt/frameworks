import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'native-base';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is screenOne</Text>

      {/* <Button onPress={() => navigation.navigate('ScreenTwo')} title="2" /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default HomeScreen;
