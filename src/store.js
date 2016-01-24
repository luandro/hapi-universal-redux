import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function (initialState) {
	const finalCreateStore = compose(
		applyMiddleware(thunk),
		typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
	)(createStore);

	const store = finalCreateStore(rootReducer, initialState);

	if (module.hot) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('./reducers', () => {
	      	const {reducer: nextReducer} = require('./reducers/index');
	      	store.replaceReducer(nextRootReducer);
	    });
	}

	return store;
}
