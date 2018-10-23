import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { updateQuestionAndOptions, updateProfile } from '../actions';
import { ScreenStyles } from '../styles/constants';

import { LargeText } from '../components/common/';
import Question from '../components/startnow/Question';
import Option from '../components/startnow/Option';
import ButtonOption from '../components/startnow/ButtonOption';


class QuestionScreen extends Component {
  onPress(index) {
    const { type, options, id } = this.props;
    const selectedOption = options[index].toLowerCase();

    if (id !== 4) {
      this.props.updateProfile({ type, selectedOption });
      this.props.updateQuestionAndOptions();
    } else {
      this.props.updateProfile({ type, selectedOption });
      Actions.registerScreen();
    }
  }

  renderOptions() {
    const { options } = this.props;
    return options.map((option, index) =>
      <ButtonOption key={index} onPress={this.onPress.bind(this, index)}>
        {option}
      </ButtonOption>
    );
  }

  renderLargeText() {
    return this.props.id === 0
    ? <LargeText>Welcome to myCoach!</LargeText>
    : <LargeText style={{ marginTop: 100 }} />;
  }

  render() {
    return (
      <View style={ScreenStyles}>
        {this.renderLargeText()}
        <Question questionText={this.props.question} />
        <Option>
          {this.renderOptions()}
        </Option>
      </View>
    );
  }
}

const mapStateToProps = ({ questionnarie, optionSelected }) => {
  const { currQuestionIndex } = optionSelected;
  return {
    question: questionnarie[currQuestionIndex].quest,
    options: questionnarie[currQuestionIndex].opts,
    id: questionnarie[currQuestionIndex].id,
    type: questionnarie[currQuestionIndex].type
  };
};

export default connect(mapStateToProps, {
  updateQuestionAndOptions,
  updateProfile
})(QuestionScreen);
