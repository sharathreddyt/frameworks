import React from 'react';
import { StyleSheet, Text, View, Button, NativeModules } from 'react-native';
import ScreenOne from './screen_one';
// import ToastExample from './ToastExample';
const { ToastModule } = NativeModules;
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Open up App.js to start working on your app! </Text>
        <Text> Changes you make will automatically reload. </Text>
        <Text> Shake your phone to open the developer menu. </Text>
        <Button
          title="show toast"
          onPress={() => {
            ToastModule.show('Awesome', ToastModule.SHORT);
          }}
        />
        <ScreenOne />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
