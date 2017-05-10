import React from 'react';
import './App.css';

export default class TodosList extends React.Component {
  render() {
    return (
        <form className="create-todo-form" onSubmit={this.handleCreate.bind(this)}>
            <input className="create-todo-input" type='text' placeholder='What do I need to do today?' ref="createInput"/>
            <button>Create</button>
        </form>
    );
  }

  handleCreate(event) {
      event.preventDefault();

      this.props.createTask(this.refs.createInput.value);
      this.refs.createInput.value = '';
  }
}

