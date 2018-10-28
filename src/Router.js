import React from 'react';
import { Image } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import {
  homeIcon,
  workoutIcon,
  badHabitsIcon,
} from '../assets';

import { Colors } from './styles/constants';
import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import BadHabitsScreen from './screens/BadHabitsScreen';
import RegisterScreen from './screens/RegisterScreen';
import QuestionScreen from './screens/QuestionScreen';
import WelcomeScreen from './screens/WelcomeScreen';


const { lightGreen, white, darkBlue } = Colors;

/* TabNavigation */
const TabNavigationScreens = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Image source={homeIcon} style={{ tintColor }} />
      )
    },
  },
  Workout: {
    screen: WorkoutScreen,
    navigationOptions: {
      tabBarLabel: 'Workout',
      tabBarIcon: ({ tintColor }) => (
        <Image source={workoutIcon} style={{ tintColor }} />
      )
    },
  },
  BadHabits: {
    screen: BadHabitsScreen,
    navigationOptions: {
      tabBarLabel: 'Bad Habits',
      tabBarIcon: ({ tintColor }) => (
        <Image source={badHabitsIcon} style={{ tintColor }} />
      )
    },
  }
};

// Tab nav options
const tabNavOptions = {
  navigationOptions: {
    tabBarVisible: true,
  },
  tabBarOptions: {
    activeTintColor: darkBlue,
    inactiveTintColor: white,
    tabStyle: {
      backgroundColor: lightGreen,
    },
    labelStyle: {
      fontSize: 13,
    },
  },
};

// Tab router config
const tabRouterConfig = {
  initialRouteName: 'Home',
  order: ['Home', 'Workout', 'BadHabits'],
  ...tabNavOptions,
};

const TabNavigator = createBottomTabNavigator(TabNavigationScreens, tabRouterConfig);
/* end: TabNavigation */

/* StackNavigation */
const StackNavigationScreens = {
  Welcome: { screen: WelcomeScreen },
  Question: { screen: QuestionScreen },
  Register: { screen: RegisterScreen },
  Home: TabNavigator,
};

// Stack nav options
const stackNavOptions = {
  navigationOptions: {
    header: null,
  },
};

// Stack router config
const stackRouterConfig = {
  initialRouteName: 'Welcome',
  ...stackNavOptions,
};
/* end: StackNavigation */


const StackNavigator = createStackNavigator(StackNavigationScreens, stackRouterConfig);

const Router = StackNavigator;
// const Router = createBottomTabNavigator(TabNavigationScreens, routerConfig);

export default Router;
