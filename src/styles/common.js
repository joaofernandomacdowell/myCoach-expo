import { StyleSheet } from 'react-native';
import { Colors } from './constants.js';

// LargeText styles
const largeTextStyles = StyleSheet.create({
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

// Card styles
const cardStyles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 60
  }
});

// CardSection
const cardSectionStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingBottom: 5,
    position: 'relative'
  }
});

// Input styles
const inputStyles = StyleSheet.create({
  input: {
    color: Colors.lightGrey,
    flex: 1,
    fontSize: 16,
    lineHeight: 23,
    paddingLeft: 5,
    paddingRight: 5
  },
  label: {
    fontSize: 18,
    fontWeight: '200'
  },
  container: {
    paddingTop: 10
  }
});

// Button styles
const buttonStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    position: 'relative'
  },
  text: {
    alignSelf: 'center',
    color: Colors.darkBlue,
    fontSize: 20,
    fontWeight: '600',
    paddingBottom: 10,
    paddingTop: 10
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: Colors.lightGreen,
    borderRadius: 1,
    flex: 1,
    marginLeft: 5,
    marginRight: 5
  }
});

// ErrorMessage styles
const errorMessageStyles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  text: {
    fontSize: 16,
    alignSelf: 'center',
    color: Colors.lightRed
  }
});

export {
  largeTextStyles,
  cardStyles,
  cardSectionStyles,
  inputStyles,
  buttonStyles,
  errorMessageStyles
};
