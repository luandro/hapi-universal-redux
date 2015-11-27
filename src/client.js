import React from "react";
import ReactDOM from "react-dom";
import {Router} from "react-router";
import configureStore from "./store.js";
import { Provider } from 'react-redux';
import routes from "./routes";
import RadiumContainer from "./views/containers/RadiumContainer";
import { createHistory } from "history";
import { syncReduxAndRouter } from 'redux-simple-router';

let debugSession;
if(process.env.NODE_ENV !== "production"){
	const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
	if (matches && matches[1]) {
		debugSession = matches[1];
	}
}
const store = configureStore(window.__INITIAL_STATE__, debugSession);
delete window.__INITIAL_STATE__;
const history = createHistory();
syncReduxAndRouter(history, store);

/**
 * Fire-up Redux DevTools on a different node.
 */

const devRoot = window.document.getElementById("react-dev");

if(process.env.NODE_ENV !== "production"){
	const DevTools = require('./views/containers/DevTools')
	ReactDOM.render(
			<Provider store={store}>
				<DevTools />
			</Provider>,
		devRoot
	)
}

/**
 * Fire-up React Router.
 */
const reactRoot = window.document.getElementById("react-root");

ReactDOM.render(
	<Provider store={store}>
		<RadiumContainer>
        	<Router routes={routes} history={history} />
        </RadiumContainer>
    </Provider>,
    reactRoot
)


/**
 * Detect whether the server-side render has been discarded due to an invalid checksum.
 */
if(process.env.NODE_ENV === "production"){
	if (!reactRoot.firstChild || !reactRoot.firstChild.attributes ||
  	!reactRoot.firstChild.attributes["data-react-checksum"]) {
		console.error("Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.");
	}
}
