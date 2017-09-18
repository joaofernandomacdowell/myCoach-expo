import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import {
  mainViewStyles,
  imageStyles,
  loginButtonStyles,
  startButtonStyles
} from '../../styles/welcome';

import { CardSection } from '../common';
import WelcomeText from './WelcomeText';
import ButtonSection from './ButtonSection';


class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { image } = imageStyles;
    const { container } = mainViewStyles;
    const { loginButton, loginText } = loginButtonStyles;
    const { startButton, startText } = startButtonStyles;

    return (
      <View style={container}>
        <View>
          <Image
            style={image}
            source={require('../../../resources/img/mycoach-logo.png')}
            resizeMode="contain"
          />
        </View>

        <WelcomeText>
          myCoach helps you achieve a healthy lifestyle!
        </WelcomeText>

        <ButtonSection>
          <TouchableOpacity
            onPress={this.props.onStartnow}
            style={startButton}
          >
            <Text style={startText}>
              START NOW
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.props.onLogin}
            style={loginButton}
          >
            <Text style={loginText}>
              LOG IN
            </Text>
          </TouchableOpacity>
        </ButtonSection>
      </View>
    );
  }
}

export default Welcome;
