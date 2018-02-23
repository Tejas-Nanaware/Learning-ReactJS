import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {

	constructor(props) {
		super();
		this.state = {
			age: props.user.age,
			status: 0
		};
		setTimeout(	() => {
			this.setState({
				status: 1
			});
		}, 3000 );
	}
	increaseAge() {
		this.setState({
			age: ++this.state.age
		});
	}
	render() {
		return(
			<div className="container">
				<h1 id="second">Hi { this.props.user.name }</h1>
				<h2>{ this.props.user.college }</h2>
				<p> Age is: { this.state.age }</p>
				<p> Status: { this.state.status }</p>
				<hr/>
				<button className="btn" onClick={ this.increaseAge.bind(this) }>Increase age</button>
			</div>
		);
	}
}

Home.propTypes = {
	user: PropTypes.object
};