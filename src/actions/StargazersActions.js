import fetch from 'isomorphic-fetch';
import {
	STARGAZERS_FETCH, STARGAZERS_REQUEST,
	STARGAZERS_STOP_FETCH,
} from './actionTypes';

let githubApi = "https://api.github.com";
if (__CLIENT__) {
	const { protocol, hostname, port } = window.location;
	githubApi = `${protocol}//${hostname}:${port}/api/github`;
}

function receiveUsers(fetchedStargazers) {
	return {
		type: STARGAZERS_FETCH,
		fetchedStargazers
	};
}

export function requestUsers() {
	return {
		type: STARGAZERS_REQUEST
	}
}
function stopFetching() {
	return {
		type: STARGAZERS_STOP_FETCH
	}
}

export function fetchUsers(nextPage, pagesToFetch) {
	return function (dispatch) {
		 return fetch(githubApi + "/repos/Luandro/hapi-universal-redux/stargazers" +`?per_page=10&page=${nextPage}`)
			.then((response) => response.json())
			.then((body) => {
				if (!body || !body.length) {
                	dispatch(stopFetching());
                	return
               	}
				const fetchedStargazers = body.map(({ id, login }) => ({ id, login }));
				dispatch(receiveUsers(fetchedStargazers));
		})
		.catch((error) => {
	        console.error(error);
	    })
	}
}
