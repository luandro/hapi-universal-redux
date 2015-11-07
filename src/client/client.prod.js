import React from "react";
import ReactDOM from "react-dom";
import {Router} from "react-router";
import configureStore from "../store/configureStore";
import { Provider } from 'react-redux';
import routes from "../routes";
import {createHistory} from "history";
const store = configureStore(window.__INITIAL_STATE__);

/**
 * Fire-up React Router.
 */
const reactRoot = window.document.getElementById("react-root");

ReactDOM.render(
	<Provider store={store}>
        <Router routes={routes} history={createHistory()} />
    </Provider>,
    reactRoot
)
