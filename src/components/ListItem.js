import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ItemsActions from '../actions/ItemsActions';

class ListItem extends React.Component {
	constructor() {
		super()
		this._handleAdd = this._handleAdd.bind(this)
	}
	_handleAdd() {
		console.log("clicked")
	}
	render() {
		return (
			<div>
				<p>{this.props.name} <span onClick={this._handleAdd}>+</span></p>
			</div>
		)
	}
}