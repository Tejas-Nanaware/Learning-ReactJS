import React, { Component } from 'react';
import { jokes } from '../assets/jokes.json';
import Joke from './Joke';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      joke: "Click the button for jokes!"
    }
  }

  generateJoke() {
    let myJoke = jokes[Math.floor(Math.random()*jokes.length)];
    this.setState({joke: myJoke});
  }
  
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Generate Joke</h1>
          <button className="btn btn-primary" onClick={() => this.generateJoke()}>Joke</button>
        </div>
        <Joke joke={this.state.joke} />
      </div>
    );
  }
}

export default App;
