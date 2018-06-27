/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Component1 from './Component1';
import Component2 from './Component2';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import MainTabBarNavigation from './MainTabBarNavigation';
import AnimatedGradient from './AnimatedGradient';

import Svg, {
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop,
} from 'react-native-svg';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const { width, height } = Dimensions.get('window');
export default class App extends Component {
  render() {
    return (
      <Svg height={height} width={width}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2={width} y2={height}>
            <Stop offset="0" stopColor="rgb(172,73,0)" stopOpacity="1" />
            <Stop offset="1" stopColor="rgb(241,114,1)" stopOpacity="0" />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width={width} height={height * 0.3} fill="url(#grad)">
          <Text style={{ color: 'white' }}>RTRT</Text>
        </Rect>

        <SafeAreaView>
          <MainTabBarNavigation />
          {/* <Component1 />
          <Screen1 />
          <Screen2 />
          <Component2 /> */}
        </SafeAreaView>
      </Svg>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
