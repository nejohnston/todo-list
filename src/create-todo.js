import React, { Component } from 'react';
import './App.css';

export default class CreateTodo extends React.Component {
  render() {
    return (
        <form>
            <input type='text' placeholder='What do I need to do today?' />
            <button>Create</button>
        </form>
    );
  }
}

