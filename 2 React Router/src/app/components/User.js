import React from "react";
import {NavLink as Link} from "react-router-dom"
import {Header} from "./Header";
export class User extends React.Component {
    render() {
        return (
            <div className="container">
                <div>
                    <Header/>
                </div>
                <h3>The User Page</h3>
                <p>User ID: {this.props.match.params.id} </p>
                <Link to="/home"><button className="btn btn-primary">Home</button></Link>
            </div>
        );
    }
}