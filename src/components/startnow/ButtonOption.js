import React from 'react';
import { ButtonGroup } from 'react-native-elements';
import { buttonOptionStyles } from '../../styles/startnow';
import { Colors } from '../../styles/constants';


const ButtonOption = (props) => {
  const { container, button, text } = buttonOptionStyles;

  return (
    <ButtonGroup
      buttons={props.buttons}
      onPress={props.onSelect}
      selectedIndex={props.selectedIndex}
      containerStyle={container}
      buttonStyle={button}
      textStyle={text}
      selectedBackgroundColor={Colors.lightGreen}
      selectedTextStyle={{ color: Colors.darkBlue }}
    />
  );
};

export default ButtonOption;
