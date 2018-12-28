export const RETRIEVE_MOVIES = 'RETRIEVE_MOVIES';
export const SELECT_MOVIE = 'SELECT_MOVIE';

export const retrieveMovies = () => {
  var moviesResponse = fetch('').then((response) => response.json()).then((responseJson) => {
    return responseJson;
  }).catch((error) => {
    console.error(error);
  })
  return {

  };
}
