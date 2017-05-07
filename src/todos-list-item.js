import React, { Component } from 'react';
import './App.css';

export default class TodosListItem extends React.Component {
  render() {
    return (
              <tr>
                <td>{this.props.task}</td>
                <td>
                  <button>Edit</button>
                </td>
              </tr>
    );
  }
}

