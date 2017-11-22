import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ScreenStyles } from '../styles/constants';

import Welcome from '../components/presentation/Welcome';


class WelcomeScreen extends Component {
  onStartnowPress = () => {
    Actions.questionScreen();
  }

  render() {
    return (
      <View style={ScreenStyles}>
        <Welcome onStartnow={this.onStartnowPress} />
      </View>
    );
  }
}

export default WelcomeScreen;
