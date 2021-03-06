import React from 'react';
import _ from 'lodash';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

import './reset.css';
import './App.css';

export default class TodosList extends React.Component {
  renderItems() {
    const props = _.omit(this.props, 'todos');

    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props} />)}

  render() {
    return (
      <div>
        <TodosListHeader />
        <div>
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

