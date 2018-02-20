import React from "react";
import { render } from "react-dom";

class App extends React.Component {
	render() {
		// what to do when component renders the code
		return(
			<nav className="navbar navbar-inverse navbar-fixed-top">
			<div className="container-fluid">
				<div className="navbar-header">
				<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>                        
				</button>
				<a className="navbar-brand" href="">React App</a>
				</div>
				<div className="collapse navbar-collapse" id="myNavbar">
				<ul className="nav navbar-nav">
					<li><a href="" className="active">Home</a></li>
					<li><a href="">About Us</a></li>
					<li><a href="">Contact</a></li>
				</ul>
				</div>
			</div>
		</nav>
		);
	}
}

render(<App/>, window.document.getElementById("nav"));