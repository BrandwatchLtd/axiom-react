import * as types from 'style-guide/constants/ActionTypes';
import { goToSearchPage } from 'style-guide/actions/routing';
import fetch from 'style-guide/utils/fetch';

export function searchReceiveSearch({ results }) {
  return {
    type: types.SEARCH_RECEIVE_SEARCH,
    payload: { results },
  };
}

export function searchRequestSearch() {
  return {
    type: types.SEARCH_REQUEST_SEARCH,
  };
}

export function searchRoutes(text) {
  return (dispatch) => {
    goToSearchPage(text);
    dispatch(searchRequestSearch());

    return fetch(`/api/search?q=${text}`)
      .then((response) => dispatch(searchReceiveSearch(response)));
  };
}
