import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { updateQuestionAndOptions, updateProfile } from '../actions';
import { ScreenStyles } from '../styles/constants';

import Welcome from '../components/startnow/Welcome';
import Question from '../components/startnow/Question';
import Option from '../components/startnow/Option';
import ButtonOption from '../components/startnow/ButtonOption';


class QuestionScreen extends Component {
  constructor(props) {
    super(props);
  }

  _onPress(index) {
    debugger;
    const { type, options, id } = this.props;
    const selectedOption = options[index].toLowerCase();
    console.log("this.props: ", this.props);

    if (id !== 4) {
      this.props.updateProfile({ type, selectedOption });
      this.props.updateQuestionAndOptions();

    } else {
      this.props.updateProfile({ type, selectedOption });
      this.props.navigation.navigate('register');
    }
  }

  _renderOptions() {
    const { options } = this.props;
    return options.map((option, index) =>
      <ButtonOption key={index} onPress={this._onPress.bind(this, index)}>
        {option}
      </ButtonOption>
    );
  }

  _renderWelcome() {
    return this.props.id === 0
    ? <Welcome>Welcome to myCoach!</Welcome>
    : <Welcome style={{ marginTop: 100 }}></Welcome>;
  }

  render() {
    return (
      <View style={ScreenStyles}>
        {this._renderWelcome()}
        <Question questionText={this.props.question} />
        <Option>
          {this._renderOptions()}
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
