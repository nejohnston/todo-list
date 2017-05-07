import React, { Component } from 'react';
import './App.css';

export default class TodosListHeader extends React.Component {
  render() {
    return (
          <thead>
              <tr>
                  <th>Task</th>
                  <th>Action</th>
              </tr>
          </thead>
    );
  }
}

