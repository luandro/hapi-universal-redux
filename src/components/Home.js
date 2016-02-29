import React from 'react';
import { connect } from 'react-redux';
import User from './User';

const Home = ({ styles, stargazers }) => (
	<div>
		<h3>Features</h3>
	    	<ul>
		    	<li><span style={styles.feature}>Redux</span> for managing app state</li>
		    	<li><span style={styles.feature}>Redux DevTools</span> for state time travelling</li>
		    	<li><span style={styles.feature}>React Transform</span> for instant client updates</li>
		    	<li>Fully automated with npm run scripts</li>
		    	<li>Server hot reloads with <span style={styles.feature}>piping</span> and Hapi.js</li>
		    	<li><span style={styles.feature}>Webpack</span> for watch + production builds</li>
		    	<li><span style={styles.feature}>React</span> and <span style={styles.feature}>React Router</span> on the client and server</li>
		    	<li><span style={styles.feature}>Babel</span> automatically compiles ES6 + ES7</li>
		    	<li><span style={styles.feature}>Radium</span> for advanced inline styling</li>
	    	</ul>
	    	<p>
	    		In short – <em>an excellent choice</em>.
	    		Ready to start{'?'}
	    	</p>
		<h3>
    		Community
    	</h3>
    	{stargazers.map((user, key) => {
			return <User key={key} user={user} styles={styles} />
		})}
	</div>
)

/**
 * Connect to Redux store.
 */
export default connect(
	state => ({
		stargazers: state.stargazers.users,
	})
)(Home)
