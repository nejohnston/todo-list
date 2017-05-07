import React, { Component } from 'react';
import TodosList from './todos-list';

import logo from './logo.svg';
import './App.css';

const todos = [
  {
    task: 'make React tutorial',
    isCompleted: false
  },
  {
    task: 'wash the dishes',
    isCompleted: true
  }
]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }

  render() {
    return (
      <div className="App">
      <h1>ToDo</h1>
      <TodosList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
