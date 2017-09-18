import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { ScreenStyles } from '../styles/constants';
import {
  mainViewStyles,
  imageStyles,
  loginButtonStyles,
  startButtonStyles
} from '../styles/presentation';

import WelcomeText from '../components/presentation/WelcomeText';
import ButtonSection from '../components/presentation/ButtonSection';


class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { image } = imageStyles;
    const { container } = mainViewStyles;
    const { loginButton, loginText } = loginButtonStyles;
    const { startButton, startText } = startButtonStyles;
    const { navigate } = this.props.navigation;

    return (
      <View style={[ScreenStyles, container]}>
        <View>
          <Image
            style={image}
            source={require('../../resources/img/mycoach-logo.png')}
            resizeMode="contain"
          />
        </View>

        <WelcomeText>
          myCoach helps you achieve a healthy lifestyle!
        </WelcomeText>

        <ButtonSection>
          <TouchableOpacity
            onPress={() => navigate('question')}
            style={startButton}
          >
            <Text style={startText}>
              START NOW
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={loginButton}>
            <Text style={loginText}>
              LOG IN
            </Text>
          </TouchableOpacity>
        </ButtonSection>
      </View>
    );
  }
};

export default WelcomeScreen;
