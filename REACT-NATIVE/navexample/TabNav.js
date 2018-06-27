import React from 'react';
import { TabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import RoomScreen from './RoomScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
const TabNav = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'HomeScreen',
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Room: {
    screen: RoomScreen,
    navigationOptions: {
      title: 'RoomScreen',
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-settings' : 'ios-settings-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
});

export default TabNav;
