import React from  'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './src/screens/SplashScreen';
import Home from './src/screens/Home';
import GetStarted from './src/components/Card/GetStarted';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
  {
    SplashScreen:SplashScreen,
    Home:Home,
    SearchScreen:SearchScreen,
  },
  {
    initialRouteName:'SplashScreen',

    defaultNavigationOptions:{
      headerShown:false
    }
  }
);

export default createAppContainer(navigator);