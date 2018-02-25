import React from "react";
import { render } from "react-dom";

// importing custom components
import { Header } from "./components/Header"
import { Home } from "./components/Home"

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			homeLink: "Home",
			homeMounted: true
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
	onChangeHomeMounted() {
		this.setState({
			homeMounted: !this.state.homeMounted
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
		let homeCmp = "";
		if(this.state.homeMounted) {
			homeCmp = (
						<Home 
							user={user}
							greet={this.onGreet}
							changeLink={this.onChangeLinkName.bind(this)}
							initialLinkName={this.state.homeLink}
						/>
			);
		}
		return(
			<div className="container">
				<div className="container">
					<Header homeLink={ this.state.homeLink }/>
				</div>
				<div className="container">
					{homeCmp}
				</div>
				<div className="container">
						<button id="second" className="btn btn-danger" onClick={() => this.onChangeHomeMounted()}>(Un)Mount Home Component</button>
				</div>
				
			</div>
		);
	}
}

render(<App/>, window.document.getElementById("nav"));