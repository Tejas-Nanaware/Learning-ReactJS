import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
	constructor(props) {
		super();
		this.state = {
			age: props.user.age,
			status: 0,
			homeLink: props.initialLinkName,
			initialParagraph: "This is a Paragraph"
		};
		setTimeout(	() => {
			this.setState({
				status: 1
			});
		}, 3000 );
		console.log("Constructor");
	}

	componentWillMount() {
		console.log("componentWillMount");
	}
	componentDidMount() {
		console.log("componentDidMount");
	}
	componentWillReceiveProps(nextProps) {
		console.log("componentWillReceiveProps", nextProps);
	}
	shouldComponentUpdate(nextProps, nextStates) {
		console.log("shouldComponentUpdate", nextProps, nextStates);
		// if (nextStates.status === 1) {
		// 	return false;
		// }
		return true;
	}
	componentWillUpdate(nextProps, nextStates) {
		console.log("componentWillUpdate", nextProps, nextStates);
	}
	componentDidUpdate(prevProps, prevStates) {
		console.log("componentDidUpdate", prevProps, prevStates);
	}
	componentWillUnmount() {
		console.log("componentWillUnmount");
	}

	
	increaseAge() {
		this.setState({
			age: ++this.state.age
		});
	}
	onChangeName() {
		this.props.changeLink(this.state.homeLink);
	}
	onHandleChange(event) {
		this.setState({
			homeLink: event.target.value
		});
	}
	changeParagraph(event) {
		this.setState({
			initialParagraph: event.target.value
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
				<hr/>
				<button className="btn btn-default" onClick={ this.props.greet }>Greet</button>
				<hr/>
				<input type="text" value={ this.state.homeLink } onChange={(event) => this.onHandleChange(event)}></input>
				<button className="btn btn-primary" onClick={ this.onChangeName.bind(this) }>Change Link</button>
				<hr/>
				<p>{ this.state.initialParagraph }</p>
				<input type="text" value={ this.state.initialParagraph } onChange={(event) => this.changeParagraph(event)}></input>
			</div>
		);
	}
}

Home.propTypes = {
	user: PropTypes.object,
	greet: PropTypes.func,
	changeLink: PropTypes.func,
	initialLinkName: PropTypes.string
};