import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { ScreenStyles } from '../styles/constants';
import { FormLabel, FormInput } from 'react-native-elements';
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
  Input,
  ErrorMessage,
  LargeText
} from '../components/common';


class RegisterScreen extends Component {
  constructor(props) {
    super(props);

    this._onEmailChange = this._onEmailChange.bind(this);
    this._onPasswordChange = this._onPasswordChange.bind(this);
    this._onButtonPress = this._onButtonPress.bind(this);
    this._onFirstNameChange = this._onFirstNameChange.bind(this);
    this._onLastNameChange = this._onLastNameChange.bind(this);
  }

  componentDidMount() {
    console.log(this.props.profile);
  }

  _onEmailChange(text) {
    this.props.emailChanged(text);
  }

  _onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  _onFirstNameChange(text) {
    this.props.firstNameChanged(text);
  }

  _onLastNameChange(text) {
    this.props.lastNameChanged(text);
  }

  _onButtonPress() {
    const { email, password, profile, firstName, lastName } = this.props;
    const name = `${firstName} ${lastName}`;

    this.props.createUser({ email, password, name, profile });
  }

  _renderErrorMessage() {
    return this.props.error !== ''
    ? <ErrorMessage>{this.props.error}</ErrorMessage>
    : null
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
            <FormInput containerStyle={container} inputStyle={input}
              onChangeText={this._onFirstNameChange}
              value={this.props.firstName}
            />
          </CardSection>

          {/* Last Name */}
          <FormLabel labelStyle={label}>Last Name</FormLabel>
          <CardSection>
            <FormInput containerStyle={container} inputStyle={input}
              onChangeText={this._onLastNameChange}
              value={this.props.lastName}
            />
          </CardSection>

          {/* Email */}
          <FormLabel labelStyle={label}>Email</FormLabel>
          <CardSection>
            <FormInput containerStyle={container} inputStyle={input}
              onChangeText={this._onEmailChange}
              value={this.props.email}
            />
          </CardSection>

          {/* Password */}
          <FormLabel labelStyle={label}>Password</FormLabel>
          <CardSection>
            <FormInput containerStyle={container} inputStyle={input}
              secureTextEntry
              onChangeText={this._onPasswordChange}
              value={this.props.password}
            />
          </CardSection>

          <Button onPress={this._onButtonPress}>
            Register
          </Button>

          {/* Error Message */}
          {this._renderErrorMessage()}
        </Card>
      </View>
    );
  }
}

const mapStateToProps = ({ auth, optionSelected, userData }) => {
  const { email, password, error, loading } = auth;
  const { profile, firstName, lastName } = userData;

  return { email, password, error, loading, profile , firstName, lastName };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  firstNameChanged,
  lastNameChanged,
  createUser,
  createProfile
})(RegisterScreen);
