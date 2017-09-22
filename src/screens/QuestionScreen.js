import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { updateQuestionAndOptions, updateProfile } from '../actions';
import { ScreenStyles } from '../styles/constants';

import { LargeText } from '../components/common/';
import Question from '../components/startnow/Question';
import Option from '../components/startnow/Option';
import ButtonOption from '../components/startnow/ButtonOption';


class QuestionScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedOption: 1 };
  }

  onButtonPress = (selectedIndex) => {
    const { type, options, id } = this.props;
    const selectedOption = options[selectedIndex].toLowerCase();
    
    if (id !== 4) {
      this.props.updateProfile({ type, selectedOption });
      this.props.updateQuestionAndOptions();
    } else {
      this.props.updateProfile({ type, selectedOption });
      this.props.navigation.navigate('register');
    }
  }

  renderLargeText() {
    return this.props.id === 0
    ? <LargeText>Welcome to myCoach!</LargeText>
    : <LargeText style={{ marginTop: 100 }} />;
  }

  render() {
    const { question, options } = this.props;

    return (
      <View style={ScreenStyles}>
        {this.renderLargeText()}
        <Question questionText={question} />
        <Option>
          <ButtonOption
            buttons={options}
            onSelect={this.onButtonPress}
            selectedIndex={this.state.selectedIndex}
          />
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
