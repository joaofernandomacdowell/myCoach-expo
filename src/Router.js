import React from 'react';
import { StackNavigator } from 'react-navigation';

import RegisterScreen from './screens/RegisterScreen';
import QuestionScreen from './screens/QuestionScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Router = StackNavigator({
  welcome: { screen: WelcomeScreen },
  question: { screen: QuestionScreen },
  register: { screen: RegisterScreen }
}, { headerMode: 'none' });

export default Router;
