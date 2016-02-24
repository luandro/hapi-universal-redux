import { combineReducers } from 'redux';
import stargazers from './stargazers';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  stargazers,
  routing: routerReducer
});

export default rootReducer;
