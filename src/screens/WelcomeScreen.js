import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Welcome from '../components/presentation/Welcome';


class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Welcome />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#153041'
  }
});


export default WelcomeScreen;
