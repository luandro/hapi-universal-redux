import React, {Component} from 'react';

export default class SearchBar extends Component {
	render() {
		const {change, search} = this.props;
		return <input
					onChange={change.bind(this)}
					placeholder="Search for a user"
					value={search}
					style={{
						background: 'black',
						color: 'white',
						fontSize: 18,
						paddingLeft: 15,
						height: 35,
						width: '80%',
						borderRadius: 10
					}}
				/>
	}
}
