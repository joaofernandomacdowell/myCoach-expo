import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { buttonStyles } from '../../styles/common';

const Button = ({ onPress, children }) => {
  const { container, button, text } = buttonStyles;
  return (
    <View style={container}>
      <TouchableOpacity onPress={onPress} style={button}>
        <Text style={text}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export { Button };
