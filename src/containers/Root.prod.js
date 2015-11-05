import React, { Component } from 'react';
import Transmit from 'react-transmit';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
const store = configureStore();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    );
  }
}

/**
 * Transmit container needed for top level component
 */
export default Transmit.createContainer(Root, {});
