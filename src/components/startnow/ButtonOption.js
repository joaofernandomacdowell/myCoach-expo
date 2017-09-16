import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { buttonOptionStyles } from '../../styles/startnow';

const ButtonOption = (props) => {
  const { button, text } = buttonOptionStyles;

  return (
    <TouchableOpacity onPress={props.onPress} style={button}>
      <Text style={text}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonOption;
