import React, { Component } from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';
import _ from 'lodash';

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
      <div>
      <h1>ToDo</h1>
      <CreateTodo createTask={this.createTask.bind(this)} />
      <TodosList
            todos={this.state.todos}
            toggleTask={this.toggleTask.bind(this)} />
      </div>
    );
  }

  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task );
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos });
  };

  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({ todos: this.state.todos })
  }
}

export default App;
