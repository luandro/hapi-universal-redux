import React from "react";
import ReactDOM from "react-dom";
import {Router} from "react-router";
import configureStore from "../store/configureStore";
import { Provider } from 'react-redux';
import DevTools from "../views/containers/DevTools";
import routes from "../routes";
import {createHistory} from "history";
const store = configureStore(window.__INITIAL_STATE__);

/**
 * Fire-up React Router.
 */
const reactRoot = window.document.getElementById("react-root");

ReactDOM.render(
	<Provider store={store}>
    	<div>
        	<Router routes={routes} history={createHistory()} />
        	<DevTools />
       	</div>
    </Provider>,
    reactRoot
)

/**
 * Detect whether the server-side render has been discarded due to an invalid checksum.
 */
if (!reactRoot.firstChild || !reactRoot.firstChild.attributes ||
  	!reactRoot.firstChild.attributes["data-react-checksum"]) {
	console.error("Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.");
}

