import React from 'react';
import { TabNavigator } from 'react-navigation';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import SubTabBarNavigation from './SubTabBarNavigation';
const MainTabBarNavigation = TabNavigator(
  {
    Screen1: {
      screen: SubTabBarNavigation,
    },
    Screen2: {
      screen: Screen2,
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  },
);

export default MainTabBarNavigation;
