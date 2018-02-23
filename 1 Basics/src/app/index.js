import React from "react";
import { render } from "react-dom";

// importing custom components
import { Header } from "./components/Header"
import { Home } from "./components/Home"

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			homeLink: "Home"
		};
	}
	onGreet() {
		alert("Hello World!")
	}
	onChangeLinkName(newName) {
		this.setState({
			homeLink: newName
		});
	}
	render() {
		// what to do when component renders the code
		var user = {
			name: "Tejas",
			college: "Atharva College of Engineering",
			age: 21,
			hobbies: ['Coding', 'Reading', 'Writing']
		};
		return(
			<div className="container">
				<div className="container">
					<Header homeLink={ this.state.homeLink }/>
				</div>
				<div className="container">
					<Home 
						user={user}
						greet={this.onGreet}
						changeLink={this.onChangeLinkName.bind(this)}
						initialLinkName={this.state.homeLink}
						/>
				</div>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById("nav"));