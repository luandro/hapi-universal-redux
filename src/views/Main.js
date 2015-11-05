import React, {Component} from 'react';
import Transmit from 'react-transmit';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SearchActions from '../actions/SearchActions';
import SearchBar from '../components/SearchBar';

const styles = {
  base: {
    fontFamily: 'sans-serif',
    color: '#0df',
    padding: '10px 30px 30px',
    width: '380px',
    margin: '10px auto',
    background: '#222',
    boxShadow: '15px 5px #6A6A6E',
  },
  new: {
    color: 'red',
  },
  github: {
    position: 'absolute',
    top: 0,
    right: 0,
    border: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  avatar: {
    borderRadius: '50%',
    width: 32,
    height: 32,
    margin: '0 2px 2px 0',
  },
};

class Main extends Component {
  render() {
    const repositoryUrl = 'https://github.com/luandro/hapi-universal-redux';
    const avatarSize    = 32;
    const avatarUrl     = (id) => `https://avatars.githubusercontent.com/u/${id}?v=3&s=${avatarSize}`;
    const { stargazers, search, dispatch } = this.props;
    const users = [];
    stargazers.forEach((user) => {
    	if (user.login.toLowerCase().indexOf(search) === -1) {
        	console.log("user.login:", user.login)
        }
        users.push(<a key={user.id} href={"https://github.com/"+user.login} target="_blank" title="you here? star us!"><img key={user.id} style={styles.avatar} src={avatarUrl(user.id)} title={user.login} alt={user.login} /></a>);
    });
    /**
     * Redux props.
     */
    return (
      <div style={styles.base}>
        <a style={styles.github} href={repositoryUrl}>
          <img src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" />
        </a>
        <h1>
          <img src="/favicon.ico" alt="icon" />
          <br/> Welcome to Hapi Universal Redux.
        </h1>
        <h3>Features</h3>
        <ul>
          <li><span style={styles.new}>NEW </span>Redux for managing app state</li>
          <li><span style={styles.new}>NEW </span>React Transform for instant client updates</li>
          <li>Fully automated with npm run scripts</li>
          <li>Server hot reloads with piping and Hapi.js</li>
          <li>Webpack for watch + production builds</li>
          <li>React.js + Router on the client and server</li>
          <li>Babel.js automatically compiles ES6 + ES7</li>
          <li>React Transmit to preload on server to client</li>
        </ul>
        <p>
          In short – <em>an excellent choice</em>.
          Ready to start{'?'}
        </p>
        <SearchBar
        	search={search}
        	{...bindActionCreators(SearchActions, dispatch)} />
        <h3>
        	Community
        	<iframe src="https://ghbtns.com/github-btn.html?user=Luandro&repo=hapi-universal-redux&type=star&count=true" frameBorder="0" scrolling="0" width="110" height="20" style={{float:"right"}}></iframe>
        </h3>
        <p>{users}</p>
      </div>
    );
  }

}

export default connect(
	state => ({
		stargazers: state.stargazers,
  		search: state.search
	})
)(Main)
