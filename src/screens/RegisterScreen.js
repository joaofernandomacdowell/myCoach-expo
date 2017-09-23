import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import { connect } from 'react-redux';
import { ScreenStyles } from '../styles/constants';
import {
  emailChanged,
  passwordChanged,
  createUser,
  createProfile,
  firstNameChanged,
  lastNameChanged
} from '../actions';
import { inputStyles } from '../styles/common';

import {
  Card,
  CardSection,
  Button,
  ErrorMessage,
  LargeText
} from '../components/common';


class RegisterScreen extends Component {
  constructor(props) {
    super(props);

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
  }

  componentDidMount() {
    console.log(this.props.profile);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onFirstNameChange(text) {
    this.props.firstNameChanged(text);
  }

  onLastNameChange(text) {
    this.props.lastNameChanged(text);
  }

  onButtonPress() {
    const { email, password, profile, firstName, lastName } = this.props;
    const name = `${firstName} ${lastName}`;

    this.props.createUser({ email, password, name, profile });
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
            <FormInput
              containerStyle={container}
              inputStyle={input}
              onChangeText={this.onFirstNameChange}
              value={this.props.firstName}
            />
          </CardSection>

          {/* Last Name */}
          <FormLabel labelStyle={label}>Last Name</FormLabel>
          <CardSection>
            <FormInput
              containerStyle={container}
              inputStyle={input}
              onChangeText={this.onLastNameChange}
              value={this.props.lastName}
            />
          </CardSection>

          {/* Email */}
          <FormLabel labelStyle={label}>Email</FormLabel>
          <CardSection>
            <FormInput
              containerStyle={container}
              inputStyle={input}
              onChangeText={this.onEmailChange}
              value={this.props.email}
            />
          </CardSection>

          {/* Password */}
          <FormLabel labelStyle={label}>Password</FormLabel>
          <CardSection>
            <FormInput
              containerStyle={container}
              inputStyle={input}
              secureTextEntry
              onChangeText={this.onPasswordChange}
              value={this.props.password}
            />
          </CardSection>

          <Button onPress={this.onButtonPress}>
            Register
          </Button>

          {/* Error Message */}
          {this.renderErrorMessage()}
        </Card>
      </View>
    );
  }
}

const mapStateToProps = ({ auth, userData }) => {
  const { email, password, error, loading } = auth;
  const { profile, firstName, lastName } = userData;

  return { email, password, error, loading, profile, firstName, lastName };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  firstNameChanged,
  lastNameChanged,
  createUser,
  createProfile
})(RegisterScreen);
