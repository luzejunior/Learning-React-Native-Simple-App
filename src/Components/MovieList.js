import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import MovieListItem from './MovieListItem'

let moviesData = [
  {title:"Venon", genre:"Action", releaseDate:"2018-10-03"},
  {title:"Halloween", genre:"Horror", releaseDate:"2018-10-18"},
  {title:"Johnny English", genre:"Comedy", releaseDate:"2018-10-13"}
];

const MovieList = () => {
  return (
    <FlatList
      data = {moviesData}
      renderItem = {(movieInfo) => (
        <MovieListItem
          movieTitle = {movieInfo.item.title}
          movieGenre = {movieInfo.item.genre}
          movieReleaseDate = {movieInfo.item.releaseDate}
        />
      )}
      keyExtractor = {(item, index) => index.toString()}
    />
  );
};

export default MovieList;
