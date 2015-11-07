import {
	STARGAZERS_ADD,
} from '../actions/actionTypes';

const initialState = [];

export default function stargazers(state = initialState, action) {
	switch (action.type) {
	case STARGAZERS_ADD:
		return state.concat(action.users);
	default:
		return initialState;
	}
}
