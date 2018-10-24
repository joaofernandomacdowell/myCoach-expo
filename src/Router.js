import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import {
  homeIcon,
  workoutIcon,
  badHabitsIcon,
} from '../assets';

import { Colors } from './styles/constants';
import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import BadHabitsScreen from './screens/BadHabitsScreen';
// import RegisterScreen from './screens/RegisterScreen';
// import QuestionScreen from './screens/QuestionScreen';
// import WelcomeScreen from './screens/WelcomeScreen';

const { lightGreen, white, darkBlue } = Colors;

const Screens = {
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

// navOptions
const navOptions = {
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

// router config
const routerConfig = {
  initialRouteName: 'Home',
  order: ['Home', 'Workout', 'BadHabits'],
  ...navOptions,
};

const Router = createBottomTabNavigator(Screens, routerConfig);

export default Router;
