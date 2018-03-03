import React from 'react';
import './../css/items.css';

export class Items extends React.Component {
	removeToDo(id) {
		this.props.removeToDo(id);
	}
	render() {
		return(
			<div className='todoWrapper'>
				<button className='btn btn-danger' onClick={(e) => this.removeToDo(this.props.id)}>Remove</button>
				<label>{this.props.item.text}</label>
			</div>
		);
	}
}