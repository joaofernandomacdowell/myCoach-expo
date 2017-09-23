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
    width: SCREEN_WIDTH * 0.9
  },
  text: {
    color: Colors.lightGrey,
    fontSize: 24,
    textAlign: 'center'
  }
});

// Option styles
const optionStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
    height: SCREEN_HEIGHT * 0.4,
    marginTop: 40,
    width: SCREEN_WIDTH * 0.9
  }
});

// Button styles
const buttonOptionStyles = StyleSheet.create({
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
    justifyContent: 'center',
    height: SCREEN_HEIGHT * 0.1,
    marginTop: 10,
    marginBottom: 10,
    width: SCREEN_WIDTH * 0.8
  }
});

export { questionStyles, optionStyles, buttonOptionStyles };
