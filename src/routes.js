import React from 'react';
import {Route} from 'react-router';
import StargazersContainer from './containers/StargazersContainer';
import Main from './views/Main';

/**
 * The React Routes for both the server and the client.
 */
export default (
	<Route component={StargazersContainer}>
		<Route path="/" component={Main} />
	</Route>
);
