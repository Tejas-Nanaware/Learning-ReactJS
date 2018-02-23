import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
	constructor(props) {
		super();
		this.state = {
			age: props.user.age,
			status: 0,
			homeLink: "Changed Link"
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
	onChangeName() {
		this.props.changeLink(this.state.homeLink);
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
				<hr/>
				<button className="btn btn-default" onClick={ this.props.greet }>Greet</button>
				<hr/>
				<button className="btn btn-primary" onClick={ this.onChangeName.bind(this) }>Change Link</button>
			</div>
		);
	}
}

Home.propTypes = {
	user: PropTypes.object,
	greet: PropTypes.func,
	changeLink: PropTypes.func
};