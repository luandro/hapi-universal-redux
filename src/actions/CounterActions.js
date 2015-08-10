import {COUNTER_PLUS, COUNTER_MINUS} from './actionTypes';

export function plus() {
  return {
    type: COUNTER_PLUS,
  };
}

export function minus() {
  return {
    type: COUNTER_MINUS,
  };
}
