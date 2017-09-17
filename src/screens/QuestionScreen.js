import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import QuestionSection from '../components/startnow/QuestionSection';


class QuestionScreen extends Component {
  render() {
    return (
      <QuestionSection />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#153041'
  }
});

export default QuestionScreen;
