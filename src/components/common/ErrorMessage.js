import React from 'react';
import { View, Text } from 'react-native';
import { errorMessageStyles } from '../../styles/common';

const ErrorMessage = ({ children }) => {
  const { text, container } = errorMessageStyles;

  return (
    <View style={container}>
      <Text style={text}>
        {children}
      </Text>
    </View>
  );
};

export { ErrorMessage };
