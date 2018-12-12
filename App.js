/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
  )

const labels = {
  loginLabel: "Login",
  passwordLabel: "Password"
}

type Props = {};
export default class App extends Component<Props> {

  state = {
    loginName: '',
    loginPassword: ''
  };

  loginOnChangeText = val => {
    this.setState({
      loginName: val
      });
  };

  passwordOnChangeText = val => {
    this.setState({
      loginPassword: val
      });
  };

  render() {
    return (
      <View style = {styles.container}>
        <DismissKeyboard>
          <View style = {styles.loginView}>

            <Text style = {styles.instructions}>{labels.loginLabel}</Text>
            <TextInput
            style = {styles.textField}
            placeholder = "Enter your email"
            value = {this.state.loginName}
            onChangeText = {this.loginOnChangeText}
            keyboardType = "email-address"
            />

            <Text style = {styles.instructions}>{labels.passwordLabel}</Text>
            <TextInput
            style = {styles.textField}
            placeholder = "Enter your password"
            value = {this.state.loginPassword}
            onChangeText = {this.passwordOnChangeText}
            secureTextEntry = {true}
            />
          </View>
        </DismissKeyboard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1162bc',
  },
  loginView: {
    flex: 2,
    marginTop: 200,
    marginBottom: 330,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffffbc',
    borderRadius: 15,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 10,
    marginBottom: 10,
  },
  textField: {
    width: 250,
    height: 25,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#ffffff",
    borderRadius: 3,
    borderColor: 'gray',
    borderWidth: 0.5,
  }
});
