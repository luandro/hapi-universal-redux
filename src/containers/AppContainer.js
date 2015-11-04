import React, {Component} from 'react';
import Transmit from 'react-transmit';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../reducers/index';
const reducer = combineReducers(reducers);
const initialState = {};

class AppContainer extends Component {

    render() {
        const reducer = combineReducers(reducers);
        const store = createStore(reducer, initialState || {});
        if (module.hot) {
    		// Enable Webpack hot module replacement for reducers
    		module.hot.accept('../reducers', () => {
      			const nextRootReducer = require('../reducers/index');
      			store.replaceReducer(nextRootReducer);
    		});
  		}
        return (
            <Provider store={store}>
        		{this.props.children}
      		</Provider>
        )

    }
}

export default Transmit.createContainer(AppContainer, {});
