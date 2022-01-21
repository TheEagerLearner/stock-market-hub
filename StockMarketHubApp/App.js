import React from  'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './src/screens/SplashScreen';
import GetStarted from './src/components/Card/GetStarted';

const navigator = createStackNavigator(
  {
    SplashScreen:SplashScreen,
    
  },
  {
    initialRouteName:'SplashScreen',

    defaultNavigationOptions:{
      headerShown:false
    }
  }
);

export default createAppContainer(navigator);