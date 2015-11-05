import React from 'react';
import {Route} from 'react-router';
import Root from '../containers/Root';
import StargazersContainer from '../containers/StargazersContainer';
import Main from '../views/Main';

/**
 * The React Routes for both the server and the client.
 */
export default (
	<Route component={Root}>
		<Route component={StargazersContainer}>
			<Route path="/" name="main" component={Main} />
		</Route>
	</Route>
);
