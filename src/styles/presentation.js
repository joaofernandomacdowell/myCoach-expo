import { StyleSheet } from 'react-native';
import { Colors } from './constants.js';

// View styles
const mainViewStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
});

// Image styles
const imageStyles = StyleSheet.create({
  image: {
    width: 250,
    height: 100,
    alignSelf: 'center',
    marginTop: 70
  }
});

// WelcomeText styles
const presentationTextStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 28,
    color: Colors.lightGrey,
    paddingLeft: 15,
    paddingRight: 15
  }
});

// ButtonSection
const buttonSectionStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

// login button styles
const loginButtonStyles = StyleSheet.create({
  loginButton: {
    backgroundColor: Colors.darkGreen,
    flex: 1,
    height: 60
  },
  loginText: {
    color: Colors.lightGrey,
    fontSize: 18,
    fontWeight: '500',
    paddingTop: 15,
    textAlign: 'center'
  }
});

// startnow button styles
const startButtonStyles = StyleSheet.create({
  startButton: {
    backgroundColor: Colors.lightGreen,
    flex: 1,
    height: 60
  },
  startText: {
    color: Colors.darkGreen,
    fontSize: 18,
    fontWeight: '500',
    paddingTop: 15,
    textAlign: 'center'
  }
});

export {
  mainViewStyles,
  imageStyles,
  presentationTextStyles,
  buttonSectionStyles,
  loginButtonStyles,
  startButtonStyles
};
