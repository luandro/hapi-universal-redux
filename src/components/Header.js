import React, { cloneElement } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/*
 * Main view colors.
 */
const colors = {
	white: '#BEBEBE',
	pink: '#D381C3',
	blue: '#6FB3D2',
	green: '#A1C659',
	darkGrey: '#2A2F3A',
	lightGrey: '#4F5A65'

}
/**
 * Main view styles.
 */
const styles = {
	base: {
		fontFamily: 'sans-serif',
		color: colors.white,
		padding: '10px 30px 30px',
		width: '380px',
		margin: '0 auto 10px',
		background: colors.darkGrey,
		boxShadow: '15px 5px ' + colors.lightGrey
	},
	link: {
		color: colors.white,
		textDecoration: 'none',
	},
	navLink: {
		fontFamily: 'sans-serif',
		color: colors.lightGrey,
		textDecoration: 'none',
		padding: '0 30px'
	},
	nav: {
		height: 40,
		width: '380px',
		margin: '10px auto 0',
		padding: '10px 30px 30px',
		color: 'white',
		backgroundColor: colors.blue,
		boxShadow: '15px 5px ' + colors.lightGrey,
		textTransform: 'uppercase'
	},
	list: {
		display: 'inline-block',
		listStyle: 'none',
	},
	feature: {
		color: colors.pink,
	},
	github: {
		position: 'absolute',
		top: 0,
		right: 0,
		border: 0,
	},
	avatar: {
		borderRadius: '50%',
		width: 32,
		height: 32,
		margin: '0 2px 2px 0',
	},

};

const repositoryUrl = 'https://github.com/luandro/hapi-universal-redux';

/**
 * Main component
 */
export default ({children}) => (
	<div>
		<div style={styles.nav}>
			<ul>
				<li style={styles.list}><Link style={styles.navLink} to="/" activeClassName="active">Home</Link></li>
				<li style={styles.list}><Link style={styles.navLink}  to="/about" activeClassName="active">About</Link></li>
				<li style={styles.list}><iframe src="https://ghbtns.com/github-btn.html?user=Luandro&repo=hapi-universal-redux&type=star&count=true" frameBorder="0" scrolling="0" width="110" height="20" style={{float:"right"}}></iframe></li>
			</ul>
		</div>
		<div style={styles.base}>
			 <a style={styles.github} href={repositoryUrl}>
				<img src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" />
			</a>
			<h1>
				<img src="/logo.svg" alt="logo" />
			</h1>
			{/*
			  * Pass props down to child Routes.
			*/}
			{cloneElement(children, Object.assign({}, {styles: styles, colors: colors }))}
		</div>
	</div>
)
