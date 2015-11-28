import React, {Component} from 'react';

export default ({styles}) => (
	<div>
		<h3>Getting started</h3>
		<p>
			Welcome to <span style={styles.feature}>Hapi Universal Redux</span>.
			Start editing the components to see the page hot reloading on the client.
			The goal of this project is to create a simple,
			yet production ready starterkit for <span style={styles.feature}>React</span> and <span style={styles.feature}>Redux</span> apps.
		</p>
		<h3>Redux</h3>
		<p>
			To start managing your state with <span style={styles.feature}>Redux</span> create new constants, actions and reducers.
			On the side is <span style={styles.feature}>Redux DevTools</span>,
			use it to debug your state.
			Simply press <span style={styles.feature}>ctrl + H</span> to hide it,
			or <span style={styles.feature}>ctrl + Q</span> to move it around the screen.
		</p>
	</div>
)
