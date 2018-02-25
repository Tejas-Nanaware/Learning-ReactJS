import React from "react";
import {NavLink as Link} from "react-router-dom"
export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><Link to={"/home"} activeStyle={{ color: 'black' }}>Home</Link></li>
                        <li><Link to={"/user/"+(2+2)} activeStyle={{ color: 'black' }}>User</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};