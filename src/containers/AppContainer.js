import React from 'react';
import {RouteHandler} from 'react-router';
import Transmit from "react-transmit";
import {createRedux} from "redux";
import {Provider} from "redux/react";
import * as reducers from '../reducers/index';

class AppContainer extends React.Component {
  render() {
      const redux = createRedux(reducers, this.props.initialState);
      console.log("initial state");
      console.log(this.props.initialState);
    return (
      <Provider redux={redux}>
        {() =>
          <RouteHandler />
        }
      </Provider>
    );
  }
}

export default Transmit.createContainer(AppContainer, {
  queryParams: {
  },
  queries: {}
});
