import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import Transmit from 'react-transmit';
import { connect } from 'react-redux';
import { saveUsers } from '../actions/StargazersActions';

@connect(state => ({
	storeStargazers: state.stargazers
}))
class StargazersContainer extends Component {

	componentWillMount() {
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
             * Recursive function to transmit the rest of the stargazers on the client.
             */
            const transmitRemainingStargazers = () => {
				if (!this.props.transmit.variables.pagesToFetch > 0) {
					return;
				}
				this.props.dispatch(saveUsers(this.props.stargazers))
				this.props.transmit.forceFetch({
					prevStargazers: this.props.stargazers,
					nextPage:       this.props.transmit.variables.nextPage + 1,
					pagesToFetch:   this.props.transmit.variables.pagesToFetch - 1
				}).then(transmitRemainingStargazers);
			};

			transmitRemainingStargazers();

        }
    }
    /**
     * Runs on server and client.
     */
    render() {
    	return this.props.children
    }
}

/**
 * Use Transmit to query and return GitHub stargazers as a Promise.
 */
export default Transmit.createContainer(StargazersContainer, {
    initialVariables: {
        nextPage: 1,
        pagesToFetch: 10,
        prevStargazers: []
    },
    fragments: {
        /**
         * Return a Promise of the previous stargazers + the newly fetched stargazers.
         */
        stargazers({
            nextPage, pagesToFetch, prevStargazers
        }) {
            /**
             * On the server, connect to GitHub directly.
             */
            let githubApi = "https://api.github.com";

            /**
             * On the client, connect to GitHub via the Hapi proxy route.
             */
            if (__CLIENT__) {
                const {
                    hostname, port
                } = window.location;
                githubApi = `http://${hostname}:${port}/api/github`;
            }

            /**
             * Load a few stargazers using the Fetch API.
             */
            return fetch(
                githubApi + "/repos/Luandro/hapi-universal-redux/stargazers" +
                `?per_page=10&page=${nextPage}`
            ).then((response) => response.json()).then((body) => {
                /**
                 * Stop fetching if the response body is empty.
                 */
                if (!body || !body.length) {
                    pagesToFetch = 0;

                    return prevStargazers;
                }

                /**
                 * Pick id and username from fetched stargazers.
                 */
                const fechedStargazers = body.map(({
                    id, login
                }) => ({
                    id, login
                }));

                return prevStargazers.concat(fechedStargazers);
            }).catch((error) => {
                console.error(error);
            });
        }
    }
});
