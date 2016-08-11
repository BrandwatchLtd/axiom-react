import * as types from 'style-guide/constants/ActionTypes';

export const initialState = {
  results: [],
  modified: false,
  isSearching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case types.SEARCH_REQUEST_SEARCH:
    return {
      ...state,
      results: [],
      modified: false,
      isSearching: true,
    };
  case types.SEARCH_RECEIVE_SEARCH:
    return {
      ...state,
      results: action.payload.results,
      isSearching: false,
    };
  default:
    return state;
  }
};
