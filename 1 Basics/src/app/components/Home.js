import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
	render() {
		return(
			<div className="container">
				<h1 id="second">Hi { this.props.user.name }</h1>
				<h2>{ this.props.user.college }</h2>
				<div>
					<h4>Hobbies</h4>
					<ul>
						{this.props.user.hobbies.map((hobby, i) => <li key = {i}>{ hobby }</li>)}
					</ul>
				</div>
				<hr/>
				{this.props.children}
			</div>
		);
	}
}

Home.propTypes = {
	user: PropTypes.object,
	children: PropTypes.element.isRequired
};