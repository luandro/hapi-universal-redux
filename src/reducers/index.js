import { combineReducers } from 'redux';
import stargazers from './stargazers';
import { routeReducer } from 'redux-simple-router';

const rootReducer = combineReducers({
  stargazers,
  routing: routeReducer
});

export default rootReducer;
