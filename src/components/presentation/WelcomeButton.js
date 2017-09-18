import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { initialButtonStyles } from '../../styles/welcome';

const WelcomeButton = ({ children, onPress }) => {
  const { button, text } = initialButtonStyles;

  return (
    <TouchableOpacity onPress={onPress} style={button}>
      <Text style={text}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default WelcomeButton;
