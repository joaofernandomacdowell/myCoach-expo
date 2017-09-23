import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { updateQuestionAndOptions, updateProfile } from '../actions';
import { ScreenStyles, Colors } from '../styles/constants';

import { LargeText } from '../components/common/';
import Question from '../components/startnow/Question';
import ButtonOption from '../components/startnow/ButtonOption';


class QuestionScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedButton: null };
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
          <ButtonOption
            buttons={options}
            onSelect={this.onButtonPress}
            selectedIndex={this.state.selectedButton}
            selectedBackgroundColor={Colors.lightGreen}
            selectedTextStyle={{ color: Colors.darkBlue }}
          />
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
