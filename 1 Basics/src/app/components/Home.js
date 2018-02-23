import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {

	constructor(props) {
		super();
		this.age = props.user.age;
	}
	increaseAge() {
		this.age += 1;
		console.log(this.age);
	}
	render() {
		return(
			<div className="container">
				<h1 id="second">Hi { this.props.user.name }</h1>
				<h2>{ this.props.user.college }</h2>
				<p> Age is: { this.age }</p>
				<hr/>
				<button className="btn" onClick={ this.increaseAge.bind(this) }>Increase age</button>
			</div>
		);
	}
}

Home.propTypes = {
	user: PropTypes.object
};