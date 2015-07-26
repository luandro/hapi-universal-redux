import React from "react";
import {Route, DefaultRoute} from "react-router";
import AppContainer from "../containers/AppContainer";
import Main from "views/Main";

/**
 * The React Routes for both the server and the client.
 *
 * @class Routes
 */
export default (
	<Route handler={AppContainer} path="/">
		<Route handler={Main} />
	</Route>
);
