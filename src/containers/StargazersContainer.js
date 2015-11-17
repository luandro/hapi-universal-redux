import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import Transmit from 'react-transmit';
import { connect } from 'react-redux';
import { fetchUsers, requestUsers } from '../actions/StargazersActions';

class StargazersContainer extends Component {

	componentWillMount = () => {
		this.props.dispatch(requestUsers());
		this.recursiveFetch();
    }
    componentDidUpdate = () => {
    	const {stargazers, dispatch} = this.props;
    	console.log("this.props:", this.props)
    	if(stargazers.nextPage > 1 && stargazers.pagesToFetch > 0){
    		this.recursiveFetch();
    	}
    }

    recursiveFetch = () => {
    	const {stargazers, dispatch} = this.props;
    	dispatch(fetchUsers(stargazers.nextPage, stargazers.pagesToFetch));
    }

    /**
     * Runs on server and client.
     */
    render() {
    	return this.props.children
    }
}
/**
 * Redux connect.
 */
export default connect(
  state => ({ stargazers: state.stargazers })
)(StargazersContainer)
