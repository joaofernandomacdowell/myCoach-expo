import React, { Component } from 'react';
import { View } from 'react-native';
import { ScreenStyles } from '../styles/constants';

import Welcome from '../components/presentation/Welcome';


class WelcomeScreen extends Component {
  onStartnowPress = () => {
    this.props.navigation.navigate('question');
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
