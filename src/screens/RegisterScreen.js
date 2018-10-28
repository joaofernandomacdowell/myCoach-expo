import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { FormLabel } from 'react-native-elements';
import firebase from 'firebase';

import { ScreenStyles } from '../styles/constants';
import { inputStyles } from '../styles/common';
import {
  Card,
  CardSection,
  Button,
  ErrorMessage,
  LargeText
} from '../components/common';

const RETRY_TIMEOUT = 3000;
export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      name: '',
      profile: props.navigation.getParam('profile', ''),
    };
  }

  onEmailChange = input => {
    this.setState({ email: input });
  }

  onPasswordChange = input => {
    this.setState({ password: input });
  }

  onFirstNameChange = input => {
    this.setState({ firstName: input });
  }

  onLastNameChange = input => {
    this.setState({ lastName: input });
  }

  onButtonPress() {
    const { firstName, lastName } = this.state;
    const fullName = `${firstName} ${lastName}`;
    this.setState({ name: fullName }, this.createUser);
  }

  async createUser() {
    const { email, password, profile, name } = this.state;
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      this.pushNameAndProfile(name, profile);
      console.log('Success! Go to Home!');
      this.props.navigation.navigate('Home');
    } catch (e) {
      console.log('error', e);
      setTimeout(() => { this.createUser(); }, RETRY_TIMEOUT);
    }
  }

  pushNameAndProfile(name, profile) {
    const { currentUser } = firebase.auth();

    firebase.database().ref(`/users/${currentUser.uid}/name`)
      .push(name);
    firebase.database().ref(`/users/${currentUser.uid}/profile`)
      .push(profile);
  }

  renderErrorMessage() {
    return this.props.error !== ''
    ? <ErrorMessage>{this.props.error}</ErrorMessage>
    : null;
  }

  render() {
    const { label, input, container } = inputStyles;
    return (
      <View style={ScreenStyles}>
        <LargeText>Register with Email</LargeText>

        <Card>
          {/* First Name */}
          <FormLabel labelStyle={label}>First Name</FormLabel>
          <CardSection>
            <TextInput
              containerStyle={container}
              style={input}
              onChangeText={this.onFirstNameChange}
              value={this.props.firstName}
              keyboardType="email-address"
              textContentType="username"
            />
          </CardSection>

          {/* Last Name */}
          <FormLabel labelStyle={label}>Last Name</FormLabel>
          <CardSection>
            <TextInput
              containerStyle={container}
              style={input}
              onChangeText={this.onLastNameChange}
              value={this.props.lastName}
              keyboardType="email-address"
              textContentType="username"
            />
          </CardSection>

          {/* Email */}
          <FormLabel labelStyle={label}>Email</FormLabel>
          <CardSection>
            <TextInput
              containerStyle={container}
              style={input}
              onChangeText={this.onEmailChange}
              value={this.props.email}
              keyboardType="email-address"
            />
          </CardSection>

          {/* Password */}
          <FormLabel labelStyle={label}>Password</FormLabel>
          <CardSection>
            <TextInput
              containerStyle={container}
              style={input}
              secureTextEntry
              onChangeText={this.onPasswordChange}
              value={this.props.password}
              keyboardType="default"
              textContentType="password"
              secureTextEntry
            />
          </CardSection>

          <Button onPress={this.onButtonPress.bind(this)}>
            Register
          </Button>

          {/* Error Message */}
          {this.renderErrorMessage()}
        </Card>
      </View>
    );
  }
}
