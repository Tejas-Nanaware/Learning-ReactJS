import React, { Component } from 'react';
import './../css/App.css';
import { Header } from './header';
import { Input } from './input';
import { Items } from './items';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listItems: [],
      nextId: 1
    }

    this.addToDo = this.addToDo.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
  }

  addToDo(text) {
    let todos = this.state.listItems.slice();
    todos.push({id: this.state.nextId, text: text});
    this.setState({
      listItems: todos,
      nextId: ++this.state.nextId
    });
  }
  
  removeToDo(id) {
    this.setState({
      listItems: this.state.listItems.filter((todo, index) => todo.id !== id)
    });
  }
  render() {
    return (
      <div className='container'>
        <Header/>
        <Input todoText='' addToDo={this.addToDo}/>
        <ul>
          {
            this.state.listItems.map((items) => {
              return <Items item={items} key={items.id} id={items.id} removeToDo={this.removeToDo} />
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
