import React, { Component } from 'react';
import TodosListHeader from './todos-list-header';
import logo from './logo.svg';
import './App.css';

export default class TodosList extends React.Component {
  render() {
    console.log(this.props.todos);

    return (
      <table>
        <TodosListHeader />
      </table>
    );
  }
}

