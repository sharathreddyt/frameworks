import React from 'react';
import { TabNavigator } from 'react-navigation';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
const SubTabBarNavigation = TabNavigator(
  {
    Screen3: {
      screen: Screen3,
    },
    Screen4: {
      screen: Screen4,
    },
  },
  {
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  },
);

export default SubTabBarNavigation;
