import React from "react";

export class Header extends React.Component {
	render() {
		return(
			<nav className="navbar navbar-inverse navbar-fixed-top">
			<div className="container">
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
					<li><a href="">Home</a></li>
					<li><a href="">About Us</a></li>
					<li><a href="">Contact</a></li>
				</ul>
				</div>
			</div>
		</nav>
		);
	}
}