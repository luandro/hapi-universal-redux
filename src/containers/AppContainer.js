import React from 'react';
import {RouteHandler} from 'react-router';
import Transmit from 'react-transmit';
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import * as reducers from '../reducers/index';

class AppContainer extends React.Component {
  static propTypes = {
    initialState: React.PropTypes.object.isRequired,
  }

  render() {
    const reducer = combineReducers(reducers);
    const store = createStore(reducer, this.props.initialState);
    return (
      <Provider store={store}>
        {() =>
          <RouteHandler />
        }
      </Provider>
    );
  }
}
export default Transmit.createContainer(AppContainer, {
  queries: {},
});
