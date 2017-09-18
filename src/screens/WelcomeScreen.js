import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { ScreenStyles } from '../styles/constants';

import Welcome from '../components/presentation/Welcome';


class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
  }

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
};

export default WelcomeScreen;
