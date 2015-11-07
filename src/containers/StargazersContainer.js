import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import Transmit from 'react-transmit';
import { connect } from 'react-redux';
import { saveUsers } from '../actions/StargazersActions';

class StargazersContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
        	nextPage: 1,
        	pagesToFetch: 5
		}
	}

	componentWillMount = () => {
		this.fetchStargazers()
    }

    fetchStargazers = () => {
    	/**
         * On the server, connect to GitHub directly.
         */
        let githubApi = "https://api.github.com";
        if (__SERVER__) {
            /**
             * This is only run on the server, and will be removed from the client build.
             */
            console.log('Hello server');
        }

        if (__CLIENT__) {
            /**
             * This is only run on the client.
             */
            console.log('Hello client');
            /**
	         * On the client fetch through the proxy.
	         */
            const { hostname, port } = window.location;
            githubApi = `http://${hostname}:${port}/api/github`;
        }

        /**
         * Load a few stargazers using the Fetch API.
         */
        return fetch(
            githubApi + "/repos/Luandro/hapi-universal-redux/stargazers" +
            `?per_page=10&page=${this.state.nextPage}`
        ).then((response) => response.json()).then((body) => {
        	if (!body || !body.length) {
                this.setState({
	        		pagesToFetch: 0
	        	});
               	return
            }
            /**
             * Pick id and username from fetched stargazers.
             */
            const fechedStargazers = body.map(({ id, login }) => ({ id, login }));
            /**
             * Dispatch action to store the fetched information.
             */
            this.props.dispatch(saveUsers(fechedStargazers));
            this.setState({
        		nextPage: this.state.nextPage + 1,
        		pagesToFetch: this.state.pagesToFetch -1
        	});
        	if (__CLIENT__) {
        		/**
				 * Recursive function to fetch the rest of the stargazers on the client.
				 */
	        	if(this.state.pagesToFetch > 0) {
	        		this.fetchStargazers()
	        	}
        	}

        }).catch((error) => {
            console.error(error);
        });
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
