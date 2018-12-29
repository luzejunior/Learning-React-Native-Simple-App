import {
  FETCHING_MOVIES,
  FETCHING_MOVIES_SUCESS,
  FETCHING_MOVIES_FAILURE
} from '../Actions/Types';

const initialState = {
  isFetching: false,
  page: 0,
  numberOfPages: 1,
  movies: [],
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
        ...state, isFetching: false, movies: state.movies.concat(action.payload.results), page: action.payload.page, numberOfPages: action.payload.total_pages
      };
    case FETCHING_MOVIES_FAILURE:
      return {
        ...state, isFetching: false, error: action.payload
      };
    default:
      return state;
  }
}

export default moviesReducer;
