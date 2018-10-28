import React, { Component } from 'react';
import { View } from 'react-native';

import data from '../data';
import { ScreenStyles } from '../styles/constants';

import { LargeText } from '../components/common';
import Question from '../components/startnow/Question';
import Option from '../components/startnow/Option';
import ButtonOption from '../components/startnow/ButtonOption';

const MAX_QUESTIONS = data.length - 1;

export default class QuestionScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questIndex: 0,
      profile: {},
    };
  }

  onPress(index) {
    const { questIndex, profile } = this.state;
    const { type, options } = data[questIndex];
    const selectedOption = options[index].toLowerCase();
    if (!this.isLastQuestion()) {
      this.updateProfile(type, selectedOption);
      this.updateQuestionAndOptions();
    } else {
      this.updateProfile(type, selectedOption);
      this.props.navigation.navigate('Register', { profile });
    }
  }

  isLastQuestion() {
    return this.state.questIndex === MAX_QUESTIONS;
  }

  updateProfile(type, selectedOption) {
    const prevProfile = this.state.profile;
    this.setState({
      profile: {
        ...prevProfile,
        [type]: selectedOption,
      }
    });
  }

  updateQuestionAndOptions() {
    const { questIndex } = this.state;
    this.setState({ questIndex: questIndex + 1 });
  }

  renderOptions() {
    const { questIndex } = this.state;
    const { options } = data[questIndex];
    return options.map((option, index) =>
      <ButtonOption key={index} onPress={this.onPress.bind(this, index)}>
        {option}
      </ButtonOption>
    );
  }

  renderLargeText() {
    return this.state.questIndex === 0
    ? <LargeText>Welcome to myCoach!</LargeText>
    : <LargeText style={{ marginTop: 100 }} />;
  }

  render() {
    const { questIndex } = this.state;
    const question = data[questIndex].question;

    return (
      <View style={ScreenStyles}>
        {this.renderLargeText()}
        <Question questionText={question} />
        <Option>
          {this.renderOptions()}
        </Option>
      </View>
    );
  }
}
