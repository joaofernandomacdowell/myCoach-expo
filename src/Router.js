import React from 'react';
import { StackNavigator } from 'react-navigation';

// import RegisterForm from './components/startnow/RegisterForm';
import QuestionScreen from './screens/QuestionScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Router = StackNavigator({
  welcome: { screen: WelcomeScreen },
  question: { screen: QuestionScreen }
}, { headerMode: 'none' });

export default Router;

// <Router sceneStyle={{ flex: 1, backgroundColor: '#153041' }}>
