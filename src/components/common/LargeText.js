import React from 'react';
import { View, Text } from 'react-native';
import { largeTextStyles } from '../../styles/common';

const LargeText = ({ children }) => {
  const { container, text } = largeTextStyles;
  return (
    <View style={container}>
      <Text style={text}>
        {children}
      </Text>
    </View>
  );
};

export { LargeText };
