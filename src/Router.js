import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import RegisterScreen from './screens/RegisterScreen';
import QuestionScreen from './screens/QuestionScreen';
import WelcomeScreen from './screens/WelcomeScreen';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ flex: 1, backgroundColor: '#153041' }}>
      <Stack key="root">
        <Scene initial hideNavBar key="welcomeScreen" component={WelcomeScreen} />
        <Scene hideNavBar key="questionScreen" component={QuestionScreen} />
        <Scene hideNavBar key="registerScreen" component={RegisterScreen} />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
