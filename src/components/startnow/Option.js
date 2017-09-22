import React from 'react';
import { View } from 'react-native';
import { optionStyles } from '../../styles/startnow';


const Option = (props) => {
  const { container } = optionStyles;

  return (
    <View style={container}>
      {props.children}
    </View>
  );
};

export default Option;
