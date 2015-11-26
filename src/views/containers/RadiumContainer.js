import React from 'react';
import Radium from 'radium';

class RadiumContainer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return this.props.children
	}
};

export default Radium(RadiumContainer)
