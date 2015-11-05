import React, { Component } from 'react';
import Transmit from 'react-transmit';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import configureStore from '../store/configureStore';
const store = configureStore();

class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					{this.props.children}
					<DevTools />
				</div>
			</Provider>
		);
	}
}

/**
 * Transmit container needed for top level component
 */
export default Transmit.createContainer(Root, {});
