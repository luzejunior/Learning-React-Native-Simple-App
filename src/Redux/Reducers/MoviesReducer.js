import {
  FETCHING_MOVIES,
  FETCHING_MOVIES_SUCESS,
  FETCHING_MOVIES_FAILURE,
  FILTERING_MOVIE_NAME,
  REVERT_MOVIE_DATA
} from '../Actions/Types';

const initialState = {
  isFetching: false,
  page: 0,
  numberOfPages: 1,
  movies: [],
  originalMovies: [],
  error: null
}

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_MOVIES:
      return {
        ...state, isFetching: true
      };
    case FETCHING_MOVIES_SUCESS:
      return {
        ...state,
        isFetching: false,
        movies: state.movies.concat(action.payload.results),
        page: action.payload.page,
        numberOfPages: action.payload.total_pages,
        originalMovies: state.movies.concat(action.payload.results)
      };
    case FETCHING_MOVIES_FAILURE:
      return {
        ...state, isFetching: false, error: action.payload
      };
    case FILTERING_MOVIE_NAME:
      return {
        ...state, movies: state.originalMovies.filter(movie => {
            return String(movie.title).includes(action.payload);
        })
      };
    case REVERT_MOVIE_DATA:
      return {
        ...state, movies: state.originalMovies
      };
    default:
      return state;
  }
}

export default moviesReducer;
