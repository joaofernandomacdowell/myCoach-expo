import React, { Component } from 'react';
import { View, Dimensions, Alert } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { Colors } from '../styles/constants';

// myscreen = 705
const SCREEN_HEIGHT = Dimensions.get('window').height;

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 2 };
  }

  componentDidMount() {
    Alert.alert(SCREEN_HEIGHT.toString());
  }

  render() {
    const buttons = ['HELLO', 'WORLD', 'BUTTONS'];
    const { button, text, container } = styles;

    return (
      <View style={{ flex: 1 }}>
        <ButtonGroup
          onPress={selectedIndex => this.setState({ selectedIndex })}
          containerStyle={container}
          buttonStyle={button}
          textStyle={text}
          buttons={buttons}
          selectedIndex={this.state.selectedIndex}
          selectedBackgroundColor={Colors.lightGreen}
          selectedTextStyle={{ color: Colors.darkBlue }}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    borderWidth: 5,
    borderColor: 'purple',
    flexDirection: 'column',
    marginTop: 150,
    height: SCREEN_HEIGHT * 0.3
  },
  button: {
    borderWidth: 1,
    borderColor: 'red',
    height: 100
  },
  text: {
    color: Colors.darkBlue,
    fontSize: 18
  }
};

export default HomeScreen;
