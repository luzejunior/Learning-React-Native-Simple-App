import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, Button, Alert, TouchableOpacity } from 'react-native';

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

  didTouchLoginButton = () => {
    if (this.props.login.trim() === '' || this.props.password.trim() === '') {
      Alert.alert("You have to enter your login information");
      return;
    }
    if (this.props.login === "Luzejunior" && this.props.password === "123") {
      Alert.alert("All correct");
    } else {
      Alert.alert("Login and Password incorrect");
    }
    this.props.dismissText();
  };

  render() {
    return (
      <DismissKeyboard>
        <View style = {styles.loginView}>

          <Text style = {styles.instructions}>{labels.loginLabel}</Text>
          <TextInput
          style = {styles.textField}
          placeholder = "Enter your email"
          value = {this.props.login}
          onChangeText = {this.props.loginChanged}
          />

          <Text style = {styles.instructions}>{labels.passwordLabel}</Text>
          <TextInput
          style = {styles.textField}
          placeholder = "Enter your password"
          value = {this.props.password}
          onChangeText = {this.props.passwordChanged}
          secureTextEntry = {true}
          />

          <TouchableOpacity style = {styles.buttonView} onPress = {this.didTouchLoginButton}>
              <Text style = {styles.buttonTitle}>LOGIN</Text>
          </TouchableOpacity>
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
    height: "13%",
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#ffffff50",
    borderRadius: 3,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  loginView: {
    width: "90%",
    height: "30%",
    marginTop: 400,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff25',
    borderRadius: 15,
  },
  buttonView: {
    width: "80%",
    height: "13%",
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: "#ffffff70"
  },
  buttonTitle: {
    color: "white",
    fontWeight: 'bold'
  }
});
