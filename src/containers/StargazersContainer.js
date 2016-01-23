import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import { connect } from 'react-redux';
import { fetchUsers, requestUsers } from '../actions/StargazersActions';
import Radium, { Style } from 'radium';


class StargazersContainer extends Component {

	componentWillMount = () => {
		/**
		 * Start loading.
		 */
		this.props.dispatch(requestUsers());
		/**
		 * Start recursive loading.
		 */
		this.recursiveFetch();
    };

    componentDidUpdate = () => {
    	const {stargazers, dispatch} = this.props;
    	/**
    	 * Recursive fetch everytime component updates.
    	 */
    	if(stargazers.nextPage > 1 && stargazers.pagesToFetch > 0 && stargazers.isLoading === true){
    		this.recursiveFetch();
    	}
    };

    /**
     * Function that dispatches the fetch action.
     */
    recursiveFetch = () => {
    	const {stargazers, dispatch} = this.props;
    	dispatch(fetchUsers(stargazers.nextPage, stargazers.pagesToFetch));
    };

    /**
     * Render child routes and Radium's Style component, for css-like global styles.
     */
    render() {
    	return (
    		<div>
    			<Style rules={{
					'body, html': {
			    		margin: 0,
			    		padding: 0
			  		},
			  		'.active': {
			  			fontWeight: 900
			  		}

				}} />
    			{this.props.children}
    		</div>
    	)
    };
}

/**
 * Radium connect.
 */
StargazersContainer = Radium(StargazersContainer);

/**
 * Redux connect.
 */
export default connect(
  state => ({ stargazers: state.stargazers })
)(StargazersContainer)
