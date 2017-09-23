import { StackNavigator } from 'react-navigation';

import RegisterScreen from './screens/RegisterScreen';
import QuestionScreen from './screens/QuestionScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';

const Router = StackNavigator({
  welcome: { screen: WelcomeScreen },
  question: { screen: QuestionScreen },
  register: { screen: RegisterScreen },
  home: { screen: HomeScreen }
}, { headerMode: 'none', initialRouteName: 'question' });

export default Router;
