import React, { Component } from 'react';
import { View } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import { ScreenStyles } from '../styles/constants';

import Welcome from '../components/presentation/Welcome';


export default class WelcomeScreen extends Component {
  onStartnowPress = () => {
    this.props.navigation.navigate('Question');
  }

  render() {
    return (
      <View style={ScreenStyles}>
        <Welcome onStartnow={this.onStartnowPress} />
      </View>
    );
  }
}
