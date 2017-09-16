import React from 'react';
import { View } from 'react-native';
import { buttonSectionStyles } from '../../styles/presentation';

const ButtonSection = ({ children }) => {
  const { container } = buttonSectionStyles;

  return (
    <View style={container}>
      {children}
    </View>
  );
};

export default ButtonSection;
