import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import React from 'react'
import styles from './App/Navigation/Styles/NavigationStyles';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './App/Screens/HomeScreen';
import SettingsScreen from './App/Screens/SettingsScreen'
import PackagesScreen from './App/Screens/PackagesScreen';
import SupportScreen from './App/Screens/SupportScreen';
import SplashScreen from './App/Screens/SplashScreen';
import SignUpScreen from './App/Screens/SignUpScreen';
import SignInScreen from './App/Screens/SignInScreen';
import DetailsScreen from './App/Screens/DetailsScreen';
import DashboardScreen from './App/Screens/DashboardScreen';
  // const AppNavigator = createStackNavigator({
        
  //         // LoginApp: {screen: LoginApp},  
  //         SplashScreen: { screen: SplashScreen},
  //         SignInScreen:{screen:SignInScreen},
  //         SignUpScreen:{screen:SignUpScreen},
  //         DashboardScreen:{screen: DashboardScreen}
          
  // },
  // {
  //           // Default config for all screens
  //           headerMode: 'none',
  //           initialRouteName: 'SplashScreen',
  //           navigationOptions: {
  //             headerStyle: styles.header,
  //           }
  // });
  const Drawer = createDrawerNavigator();

  export default function AppNavigator() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          <Drawer.Screen name="PackagesScreen" component={PackagesScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
  // export default createAppContainer(AppNavigator);