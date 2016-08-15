import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import navigation from './navigation';
import search from './search';

const rootReducer = combineReducers({
  routing: routerReducer,
  navigation,
  search,
});

export default rootReducer;
