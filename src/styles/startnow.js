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
    borderWidth: 0,
    backgroundColor: Colors.darkBlue,
    flexDirection: 'column',
    height: SCREEN_HEIGHT * 0.6,
    justifyContent: 'center',
    marginTop: 30
  },
  button: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: Colors.lightGreen,
    height: SCREEN_HEIGHT * 0.2,
    width: SCREEN_WIDTH * 0.8,
    marginTop: 10,
    marginBottom: 10
  },
  text: {
    color: Colors.lightGrey,
    fontSize: 16,
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 13,
    textAlign: 'center'
  }
});

export { questionStyles, optionStyles, buttonOptionStyles };
