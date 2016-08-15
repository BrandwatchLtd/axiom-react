import * as types from 'style-guide/constants/ActionTypes';

export function navigationRouteEnter(path) {
  return (dispatch) => {
    dispatch(navigationSetActivePath(path));
    dispatch(navigationSetOpenPath(path));
  };
}

export function navigationSetActivePath(path) {
  return {
    type: types.NAVIGATION_SET_ACTIVE_PATH,
    payload: { path },
  };
}

export function navigationSetOpenPath(path) {
  return {
    type: types.NAVIGATION_SET_OPEN_PATH,
    payload: { path },
  };
}


