import { combineReducers } from 'redux';
import search from './search';
import stargazers from './stargazers';

const rootReducer = combineReducers({
  stargazers,
  search
});

export default rootReducer;
