import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const MovieListItem = props => (
  <TouchableOpacity>
    <View style = {styles.listItem}>
      <Image
        source = {{uri: 'https://facebook.github.io/react/logo-og.png'}}
        style = {styles.image}
      />
      <View style = {styles.textView}>
        <Text style = {styles.movieTitle}>{props.movieTitle}</Text>
        <Text>Genres: {props.movieGenre}</Text>
        <Text>ReleaseDate: {props.movieReleaseDate}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    height: 150,
    padding: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#eee"
  },
  image: {
    width: 80,
    height: 120
  },
  textView: {
    flex: 2,
    justifyContent: 'flex-start',
    marginLeft: 15
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4
  }
});

export default MovieListItem;
