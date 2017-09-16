import React from 'react';
import { StackNavigator } from 'react-navigation';

import RegisterForm from './components/startnow/RegisterForm';
import QuestionSection from './components/startnow/QuestionSection';
import Welcome from './components/presentation/Welcome';


const Router = StackNavigator({
  welcome: { screen: WelcomeScreen },
  question: { screen: QuestionScreen },
});

export default Router;

// <Router sceneStyle={{ flex: 1, backgroundColor: '#153041' }}>
