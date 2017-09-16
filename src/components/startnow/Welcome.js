import React from 'react';
import { View, Text } from 'react-native';
import { welcomeStyles } from '../../styles/startnow';

const Welcome = (props) => {
  const { container, text } = welcomeStyles;
  return (
    <View style={container}>
      <Text style={text}>
        {props.children}
      </Text>
    </View>
  );
};

export default Welcome;
