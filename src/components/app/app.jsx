import React from 'react';
import './app.scss';
import {VisibleTodoList} from '../todoList/visibleTodoList';
import {AddTodo} from '../addTodo/addTodo';
import {VisibilityFilter} from '../visibilityFilter/visibilityFilter';
import PropsTypes from 'prop-types';

export class App extends React.Component {
  static propTypes = {
    match: PropsTypes.object
  };

  render() {
    return (
      <React.Fragment>
        <VisibleTodoList filter={this.props.match.params.filter} />
        <AddTodo />
        <VisibilityFilter />
      </React.Fragment>
    );
  }
}
