import {SEARCH_CHANGE} from './actionTypes';

export function change(input) {
	return {
    	type: SEARCH_CHANGE,
    	input: input.target.value.toLowerCase().toString()
  	};
}
