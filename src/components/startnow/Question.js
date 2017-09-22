import React from 'react';
import { View, Text } from 'react-native';
import { questionStyles } from '../../styles/startnow';


const Question = (props) => {
  const { container, text } = questionStyles;

  return (
    <View style={container}>
      <Text style={text}>
        {props.questionText}
      </Text>
    </View>
  );
};

export default Question;
