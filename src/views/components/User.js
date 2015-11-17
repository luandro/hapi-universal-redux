import React from 'react';
const avatarSize    = 32;
const avatarUrl     = (id) => `https://avatars.githubusercontent.com/u/${id}?v=3&s=${avatarSize}`;

/**
 * Stateless React component
 */
export default ({user, styles}) => (
	<a href={"https://github.com/"+user.login} target="_blank" title="you here? star us!">
		<img style={styles.avatar} src={avatarUrl(user.id)} title={user.login} alt={user.login} />
	</a>
);
