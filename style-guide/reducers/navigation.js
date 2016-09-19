import * as types from 'style-guide/constants/ActionTypes';
import { getFirstRoute } from 'style-guide/utils/examples';

export const initialState = {
  activePath: getFirstRoute(),
  openPath: getFirstRoute(),
  visible: false,
};

export default function navigation(state = initialState, action) {
  switch (action.type) {
  case types.NAVIGATION_SET_ACTIVE_PATH:
    return {
      ...state,
      activePath: action.payload.path,
    };
  case types.NAVIGATION_SET_OPEN_PATH:
    return {
      ...state,
      openPath: action.payload.path,
    };
  default:
    return state;
  }
}
