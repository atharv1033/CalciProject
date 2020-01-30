import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigation, createStackNavigator } from 'react-navigation-stack';

import Login from './Components/Login'
import Calculator from './Components/Calculator'


const AppNavigator = createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
    Calculator: {
      screen: Calculator,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(AppNavigator);