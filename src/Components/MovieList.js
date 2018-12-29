import React from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator, Alert } from 'react-native';
import MovieListItem from './MovieListItem'

// let moviesData = [
//   {title:"Venon", genre:"Action", releaseDate:"2018-10-03"},
//   {title:"Halloween", genre:"Horror", releaseDate:"2018-10-18"},
//   {title:"Johnny English", genre:"Comedy", releaseDate:"2018-10-13"}
// ];

const MovieList = (props) => {
  let posterURL = "https://image.tmdb.org/t/p/w500";
  let content = props.isFetching ? (
    <View style={styles.activityIndicatorView}>
      <ActivityIndicator size="small" />
    </View>
  ) : (
    <FlatList
      data = {props.data}
      renderItem = {(movieInfo) => (
        <MovieListItem
          movieTitle = {movieInfo.item.title}
          movieGenre = {movieInfo.item.genre}
          movieReleaseDate = {movieInfo.item.release_date}
          moviePoster = {posterURL + movieInfo.item.poster_path}
        />
      )}
      keyExtractor = {(item, index) => index.toString()}
      onEndReachedThreshold={0.05}
      onEndReached={({ distanceFromEnd }) => {
          props.fetchMoreData()
      }}
    />
  );
  return (content);
};

const styles = StyleSheet.create({
  activityIndicatorView: {
    flex: 1,
    alignItems: "center",
    marginTop: 100
  }
});

export default MovieList;
