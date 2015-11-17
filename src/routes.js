import React from 'react';
import {Route} from 'react-router';
import StargazersContainer from './views/containers/StargazersContainer';
import Main from './views/Main';
import Home from './views/Home';
import About from './views/About';

/**
 * The React Routes for both the server and the client.
 */
export default (
	<Route component={StargazersContainer}>
		<Route component={Main}>
			<Route path="/" component={Home} />
			<Route path="/about" component={About} />
		</Route>
	</Route>
);
