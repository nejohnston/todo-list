import React from 'react';

import './reset.css';
import './App.css';


export default class TodosListHeader extends React.Component {
  render() {
    return (
      <div className="todo-items-header">
              <div>
                  <h2>Task</h2>
              </div>
              <div>
                  <h2>Action</h2>
              </div>
        </div>
    );
  }
}

