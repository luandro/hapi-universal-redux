import React, {Component} from 'react';

export default class extends Component {
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
						height: 35,
						width: '80%',
						borderRadius: 10
					}}
				/>
	}
}
