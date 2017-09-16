import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import WelcomeScreen from './src/screens/WelcomeScreen';
import QuestionScreen from './src/screens/QuestionScreen';


export default class App extends Component {
  render() {
    // rot TabNavigator
    const MainNavigator = StackNavigator({
      welcome: { screen: WelcomeScreen },
      question: { screen: QuestionScreen }
    }, { headerMode: 'none' });

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