import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from './constants.js';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

// Question styles
const questionStyles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 60,
    width: 300
  },
  text: {
    color: Colors.lightGrey,
    fontSize: 22,
    textAlign: 'center'
  }
});

// Option styles
const optionStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'red',
    width: 300,
    height: 300,
    alignSelf: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40
  }
});

// ButtonOption styles
const buttonOptionStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.darkBlue,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  text: {
    color: Colors.lightGrey,
    fontSize: 16,
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 13,
    textAlign: 'center'
  },
  button: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: Colors.lightGreen,
    height: SCREEN_HEIGHT * 0.25,
    width: SCREEN_WIDTH * 0.7,
    marginTop: 10,
    marginBottom: 10
  }
});

export { questionStyles, optionStyles, buttonOptionStyles };
