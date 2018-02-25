import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loadable from "react-loadable";

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";

class App extends React.Component {
    render() {
        return (
			<Router>
				<div>
					<Route exact path="/" component={Home} />
					<Route path="/user/:id" component={User} />
					<Route path="/home" component={Home} />
				</div>
			</Router>
        );
    }
}

render(<App />, window.document.getElementById('app'));