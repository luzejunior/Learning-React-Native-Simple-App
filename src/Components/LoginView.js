import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, Button, Alert } from 'react-native';

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const labels = {
  loginLabel: "Login",
  passwordLabel: "Password"
};

type Props = {};
export default class LoginView extends Component<Props> {

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

  didTouchLoginButton = () => {
    if (this.state.loginName.trim() === '' || this.state.loginPassword.trim() === '') {
      Alert.alert("You have to put login and password");
      return;
    }
    if (this.state.loginName.trim() === "Luzejunior" && this.state.loginPassword === "123") {
      Alert.alert("All correct");
    } else {
      Alert.alert("Login and Password incorrect");
    }
    this.setState(() => {
      return {
        loginName: '',
        loginPassword: ''
      };
    });
  };

  render() {
    return (
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

          <Button
          title = "Login"
          style = {color = 'red'}
          onPress = {this.didTouchLoginButton}
          />
        </View>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginTop: 10,
    marginBottom: 10,
  },
  textField: {
    width: "80%",
    height: "15%",
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#ffffff50",
    borderRadius: 3,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  loginView: {
    width: "90%",
    height: "25%",
    marginTop: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff25',
    borderRadius: 15,
  }
});
