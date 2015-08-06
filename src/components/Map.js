import React from 'react';

export default class Map extends React.Component {
	render() {
		let rows = [];
		this.props.items.forEach(function(item, key) {
		    if (item.name.toLowerCase().indexOf(this.props.input) === -1) {
		        return;
		    }
		    rows.push(<p key={key}>{item.name}</p>);
		}.bind(this));
		return (
			<div>
				<h1>Map</h1>
				{rows}
			</div>
		)
	}	
}