import {
  COUNTER_PLUS,
  COUNTER_MINUS
} from 'actions/actionTypes';

const initialState = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
  case COUNTER_PLUS:
    return state + 1;
  case COUNTER_MINUS:
    return state - 1;
  default:
    return initialState;
  }
}
