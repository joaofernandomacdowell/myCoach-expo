import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import { inputStyles } from '../../styles/common';
import { Colors } from '../../styles/constants';

// props list. Recieve by the parent component
const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { labelStyle, inputStyle, containerStyle } = inputStyles
  return (
    <View style={containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={Colors.darkGrey}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export { Input };
