import {
	SEARCH_CHANGE
} from '../actions/actionTypes';

const initialState = "";

export default function search(state = initialState, action) {
	switch (action.type) {
	case SEARCH_CHANGE:
		return action.input;
	default:
		return initialState;
	}
}
