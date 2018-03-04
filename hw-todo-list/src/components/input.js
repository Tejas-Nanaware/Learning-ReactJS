import React from 'react';
import './../css/input.css';

export class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
		this.addToDo = this.addToDo.bind(this);
	}
	
	handleChange(e) {
		this.setState({value: e.target.value});
	}
	
	addToDo(todo) {
		if(todo.length > 0) {
			this.props.addToDo(todo);
			this.setState({value: ''});
		}
	}
	
	render() {
		return(
			<div>
				<input className='in input-lg' type='text' value={this.state.value} onChange={this.handleChange}  placeholder='What to do?' />
				<button className='btn btn-primary btn-lg' onClick={() => this.addToDo(this.state.value)}>Submit</button>
				<br/>
				<hr/>
			</div>
		);
	}
}

export default Input;