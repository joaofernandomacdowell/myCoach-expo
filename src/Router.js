import { StackNavigator } from 'react-navigation';

import RegisterScreen from './screens/RegisterScreen';
import QuestionScreen from './screens/QuestionScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import NotificationsScreen from './screens/NotificationsScreen';

const Router = StackNavigator({
  welcome: { screen: WelcomeScreen },
  question: { screen: QuestionScreen },
  register: { screen: RegisterScreen },
  mainFlow: {
    screen: StackNavigator({
      notifications: { screen: NotificationsScreen }
    })
  }
}, { headerMode: 'none', initialRouteName: 'welcome' });

export default Router;
