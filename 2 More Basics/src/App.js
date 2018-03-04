import React, { Component } from 'react';
import Person from './components/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'abc', age: 11 },
      { name: 'def', age: 3 },
      { name: 'ghi', age: 12 }
    ],
    showDiv: false
  }

  switchNameHandler = (newName) => {

    this.setState( {
      persons: [
        { name: newName, age: 11 },
        { name: 'def', age: 3 },
        { name: 'ghi', age: 12 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'ABC', age: 11 },
        { name: event.target.value, age: 3 },
        { name: 'ghi', age: 12 }
      ]
    } )
  }

  toggleDiv = () => this.setState({showDiv: !this.state.showDiv});

  render () {

    let persons = null;
    if (this.state.showDiv === true) {
        persons = (
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'SUP!')}
            changed={this.nameChangedHandler} >My Hobbies: Coding</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
        </div>);
    }

    return (
      <div className="container">
        <h1>This is a React App</h1>
        <p>It is working!</p>
        <button className='btn btn-primary' onClick={ this.toggleDiv }>Toggle</button>
        {/* { this.state.showDiv ? 
          <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'SUP!')}
            changed={this.nameChangedHandler} >My Hobbies: Coding</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
          </div>
           : null} */}
        { persons }
      </div>
    );
  }
}

export default App;