import React from 'react';
import { View } from 'react-native';
import { cardStyles } from '../../styles/common';

// props.children will render <Text>{props.album.title}</Text>
const Card = (props) => {
  return (
    <View style={cardStyles.container}>
      {props.children}
    </View>
  );
};

export { Card };
