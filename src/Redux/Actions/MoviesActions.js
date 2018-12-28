import {
  FETCHING_MOVIES,
  FETCHING_MOVIES_SUCESS,
  FETCHING_MOVIES_FAILURE
} from './Types';

export const fetchingMoviesRequest = () => ({
  type: FETCHING_MOVIES
});

export const fetchingMoviesSucess = (data) => ({
  type: FETCHING_MOVIES_SUCESS,
  payload: data
});

export const fetchingMoviesFailure = (error) => ({
  type: FETCHING_MOVIES_FAILURE,
  payload: error
});

export const fetchMovies = () => {
  return async dispatch => {
    dispatch(fetchingMoviesRequest());
    try {
      let response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=1f54bd990f1cdfb230adb312546d765d&page=1');
      let json = await response.json();
      dispatch(fetchingMoviesSucess(json));
    } catch (error) {
      dispatch(fetchingMoviesFailure(error));
    }
  }
};
