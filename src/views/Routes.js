import React from 'react';
import {Route} from 'react-router';
import AppContainer from 'containers/AppContainer';
import Main from 'views/Main';

/**
 * The React Routes for both the server and the client.
 *
 * @class Routes
 */
export default (
	<Route handler={AppContainer}>
		<Route path="/" name="main" handler={Main} />
	</Route>
);
