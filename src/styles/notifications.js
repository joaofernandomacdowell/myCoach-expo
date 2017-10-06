import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from './constants.js';

// const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


// List styles
const listStyles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
});

// ListItem styles
const listItemStyles = StyleSheet.create({
  listItemContainer: {
    height: SCREEN_HEIGHT * 0.1
  },
  title: {
    fontSize: 20,
    color: Colors.lightGreen
  }
});

export { listStyles, listItemStyles };
