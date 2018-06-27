import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RootNavigation from './navigation';

export default class App extends React.Component {
  render() {
    console.log('====================================');
    console.log('loading');
    console.log('====================================');
    return <RootNavigation />;
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
