import React from 'react';
import {Route} from 'react-router';
import AppContainer from '../containers/AppContainer';
import StargazersContainer from '../containers/StargazersContainer';
import Main from '../views/Main';

/**
 * The React Routes for both the server and the client.
 */
export default (
	<Route component={AppContainer}>
		<Route component={StargazersContainer}>
			<Route path="/" name="main" component={Main} />
		</Route>
	</Route>
);
