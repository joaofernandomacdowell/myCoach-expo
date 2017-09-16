import { StyleSheet } from 'react-native';
import { Colors } from './constants.js';

// Welcome styles
const welcomeStyles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
  text: {
    color: Colors.lightGrey,
    fontSize: 28,
    textAlign: 'center'
  }
});

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
    width: 300,
    height: 300,
    alignSelf: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40
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
    height: 50,
    width: 250,
    marginTop: 10,
    marginBottom: 10
  }
});

export { questionStyles, optionStyles, buttonOptionStyles, welcomeStyles };
