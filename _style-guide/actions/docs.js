import * as types from 'style-guide/constants/ActionTypes';

export function docsRouteEnter(path) {
  return (dispatch) => {
    dispatch(docsSetActivePath(path));
    dispatch(docsSetOpenPath(path));
  };
}

export function docsSetActivePath(path) {
  return {
    type: types.DOCS_SET_ACTIVE_PATH,
    payload: { path },
  };
}

export function docsSetOpenPath(path) {
  return {
    type: types.DOCS_SET_OPEN_PATH,
    payload: { path },
  };
}


