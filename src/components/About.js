import React from 'react';

export default ({ styles }) => (
	<div>
		<h3>Getting started</h3>
		<p>
			Welcome to <span style={styles.feature}>Hapi Universal Redux</span>.
			Start editing the components to see the page hot reloading on the client.
			The goal of this project is to create a simple,
			yet production ready starterkit for <span style={styles.feature}>React</span> and <span style={styles.feature}>Redux</span> apps.
		</p>
		<h3>Redux DevTools</h3>
		<p>
			To start managing your state create new constants, actions and reducers.
			Install <a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en"><span style={styles.feature}>Redux DevTools Extension for Chrome</span></a> if you haven't already,
			and use it to debug you're app's state.
		</p>
	</div>
)
