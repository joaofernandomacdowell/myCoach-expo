import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import RegisterScreen from './screens/RegisterScreen';
import QuestionScreen from './screens/QuestionScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';


const RouterComponent = () => (
  <Router sceneStyle={{ flex: 1, backgroundColor: '#153041' }}>
    <Stack key="root">
      <Scene hideNavBar key="welcomeScreen" component={WelcomeScreen} />
      <Scene hideNavBar key="questionScreen" component={QuestionScreen} />
      <Scene hideNavBar key="registerScreen" component={RegisterScreen} />
      <Scene initial hideNavBar key="homeScreen" component={HomeScreen} />
    </Stack>
  </Router>
);

export default RouterComponent;
