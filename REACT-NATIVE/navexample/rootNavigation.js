import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import TabNav from './TabNav';
const RootNavigation = StackNavigator(
  {
    Main: {
      screen: TabNav,
    },
    ScreenOne: {
      screen: ScreenOne,
    },
    ScreenTwo: {
      screen: ScreenTwo,
    },
  },
  {
    initialRouteName: 'ScreenOne',
  },
);

export default RootNavigation;
