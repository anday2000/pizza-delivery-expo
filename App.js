import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import MenuScreen from './src/screens/MenuScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import CartScreen from './src/screens/CartScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SignManagementScreen from './src/screens/SignManagementScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';

import {
  AntDesign,
  FontAwesome5,
  FontAwesome,
  Feather,
} from '@expo/vector-icons';

const switchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({}) => <AntDesign name="home" size={24} color="red" />,
      },
    },
    Explore: {
      screen: ExploreScreen,
      navigationOptions: {
        tabBarLabel: 'Explore',
        tabBarIcon: ({}) => (
          <FontAwesome5 name="compass" size={24} color="red" />
        ),
      },
    },
    Cart: {
      screen: CartScreen,
      navigationOptions: {
        tabBarLabel: 'Cart',
        tabBarIcon: ({}) => (
          <Feather name="shopping-cart" size={24} color="red" />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({}) => (
          <FontAwesome name="reorder" size={24} color="red" />
        ),
      },
    },

    // homeScreenFlow: createStackNavigator({
    //   TrackList: TrackListScreen,
    //   TrackDetail: TrackDetailScreen,
    // }),
  }),
});

// const switchNavigator = createStackNavigator(
//   {
//     Menu: {
//       screen: MenuScreen,
//     },
//     Details: {
//       screen: DetailsScreen,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//   },
//   {
//     // initialRouteName: 'Home',
//   }
// );

// const switchNavigator = createStackNavigator({
//   // SignManagementScreen: {
//   //   screen: SignManagementScreen,

//   SignInScreen: {
//     screen: SignInScreen,

//     // SignUpScreen: {
//     //   screen: SignUpScreen,

//     navigationOptions: {
//       headerShown: false,
//     },
//   },
// });
export default createAppContainer(switchNavigator);
