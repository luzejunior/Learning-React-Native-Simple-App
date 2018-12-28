/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginView from './src/Components/LoginView';
import MainScreen from './src/Components/MainScreen';
import Store from './src/Models/Store';
import { Provider } from 'react-redux';

type Props = {};
export default class App extends Component<Props> {

  state = {
    modalVisible: false
  };

  toggleModalVisible = () => {
    this.setState({
      modalVisible: !modalVisible
      });
  };

  dismissText = () => {
    this.setState(() => {
      return {
        loginName: '',
        loginPassword: ''
      };
    });
  };

  render() {
    return (
      <Provider store = {Store}>
        <MainScreen/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
