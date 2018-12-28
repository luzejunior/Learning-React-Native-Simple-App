import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

import MovieList from './MovieList'

class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Upcoming Movies</Text>
        <TextInput
        style = {styles.searchBar}
        placeholder = 'Search for movie'
        />
        <MovieList/>
      </View>
    );
  }
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent : 'flex-start',
    flexDirection: 'column'
  },
  titleStyle: {
    marginTop: 60,
    marginLeft: 22,
    fontSize: 28,
    fontWeight: 'bold'
  },
  searchBar: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    height: 35,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  }
});
