/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import {
  mainViewStyles,
  imageStyles,
  loginButtonStyles,
  startButtonStyles
} from '../../styles/welcome';
import { myCoachLogo } from '../../../assets';

import WelcomeText from './WelcomeText';
import ButtonContainer from './ButtonContainer';

export default class Welcome extends Component {
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
            source={myCoachLogo}
            resizeMode="contain"
          />
        </View>

        <WelcomeText>
          myCoach helps you achieve a healthy lifestyle!
        </WelcomeText>

        <ButtonContainer>
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
        </ButtonContainer>
      </View>
    );
  }
}
