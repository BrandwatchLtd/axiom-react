import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import navigation from './navigation';

const rootReducer = combineReducers({
  routing: routerReducer,
  navigation,
});

export default rootReducer;
