import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import GoScreen from './GoScreen';
import Screen2 from './Screen2.js';
import Screen3 from './Screen3.js';

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 500,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;

      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      });

      return { transform: [{ translateX }] };
    },
  };
};
const RootNavigation = StackNavigator(
  {
    Go: {
      screen: GoScreen,
    },
    Screen2: {
      screen: Screen2,
    },
    Screen3: {
      screen: Screen3,
    },
  },
  {
    initialRouteName: 'Go',
    transitionConfig,
  },
);

// class Navigation extends Component {
//   render() {
//     console.log('====================================');
//     console.log(this.props);
//     console.log('====================================');
//     return (
//       <View>
//         <RootNavigation />
//       </View>
//     );
//   }
// }

export default RootNavigation;
