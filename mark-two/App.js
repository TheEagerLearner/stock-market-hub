import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/screens/Home';
import Search from './src/screens/Search';
import SplashScreen from './src/screens/SplashScreen';
import Notification from './src/screens/Notification';

const navigator = createStackNavigator({

  SplashScreen:SplashScreen,
  Home:Home,
  Search:Search,
  Notification:Notification


},
{
  initialRouteName:"SplashScreen",
  defaultNavigationOptions:{
    headerShown:false,
  }
}
);

export default createAppContainer(navigator);