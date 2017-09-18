import React from 'react';
import { View } from 'react-native';
import { buttonSectionStyles } from '../../styles/welcome';

const ButtonContainer = ({ children }) => {
  const { container } = buttonSectionStyles;

  return (
    <View style={container}>
      {children}
    </View>
  );
};

export default ButtonContainer;
