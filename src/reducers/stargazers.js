import {
	STARGAZERS_FETCH, STARGAZERS_REQUEST,
	STARGAZERS_STOP_FETCH
} from '../actions/actionTypes';

const initialState = {
	users: [],
	nextPage: 1,
	pagesToFetch: 30,
	isLoading: false
};

export default function stargazers(state = initialState, action) {
	switch (action.type) {
	case STARGAZERS_FETCH:
		return Object.assign({}, state, {
	        users: state.users.concat(action.fetchedStargazers),
	        nextPage: state.nextPage + 1,
	        pagesToFetch: state.pagesToFetch - 1
	    })
	case STARGAZERS_REQUEST:
		return Object.assign({}, state, {
			isLoading: true
		})
	case STARGAZERS_STOP_FETCH:
		return Object.assign({}, state, {
			pagesToFetch: 0,
			isLoading: false
		})
	default:
		return state;
	}
}
