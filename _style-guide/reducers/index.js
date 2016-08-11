import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import docs from './docs';
import search from './search';

const rootReducer = combineReducers({
  routing: routerReducer,
  docs,
  search,
});

export default rootReducer;
