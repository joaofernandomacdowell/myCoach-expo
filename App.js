import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import WelcomeScreen from './src/screens/WelcomeScreen';
import QuestionScreen from './src/screens/QuestionScreen';


export default class App extends React.Component {
  render() {
    // rot TabNavigator
    const MainNavigator = StackNavigator({
      presentation: { screen: WelcomeScreen },
      question: { screen: QuestionScreen }
    });

    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#153041'
  }
});
