import {STARGAZERS_ADD} from './actionTypes';

export function saveUsers(stargazers) {
  return {
    type: STARGAZERS_ADD,
    users: stargazers
  };
}
