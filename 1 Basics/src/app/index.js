import React from "react";
import { render } from "react-dom";

// importing custom components
import { Header } from "./components/Header"
import { Home } from "./components/Home"

class App extends React.Component {
	render() {
		// what to do when component renders the code
		return(
			<div className="container">
				<div className="container">
					<Header/>
				</div>
				<div className="container">
					<Home/>
				</div>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById("nav"));