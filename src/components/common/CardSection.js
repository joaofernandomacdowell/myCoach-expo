import React from 'react';
import { View } from 'react-native';
import { cardSectionStyles } from '../../styles/common';

// Does need data fetching. Just a presentation component
// Does not need to be a class component
const CardSection = (props) => {
  // Uses props.style if someone pass a style by prop in component
  return (
    <View style={[cardSectionStyles.container, props.style]}>
      {props.children}
    </View>
  );
};

export { CardSection };
