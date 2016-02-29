import React from 'react';
import { Router, Route } from 'react-router';
import StargazersContainer from './containers/StargazersContainer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

/**
 * The React Routes for both the server and the client.
 */
module.exports = (
	<Router>
		<Route component={StargazersContainer}>
			<Route component={Header}>
				<Route path="/" component={Home} />
				<Route path="/about" component={About} />
			</Route>
		</Route>
	</Router>
);
