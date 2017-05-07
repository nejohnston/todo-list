import React, { Component } from 'react';
import _ from 'lodash';
import TodosListHeader from './todos-list-header';
import logo from './logo.svg';
import './App.css';

export default class TodosList extends React.Component {
  renderItems() {
    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo}/>)
  }

  render() {
    console.log(this.props.todos);

    return (
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}

