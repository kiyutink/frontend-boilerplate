import React from 'react';
import './app.scss';
import {VisibleTodoList} from '../todoList/visibleTodoList';
import {AddTodo} from '../addTodo/addTodo';
import {VisibilityFilter} from '../visibilityFilter/visibilityFilter';

export class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <VisibleTodoList />
        <AddTodo />
        <VisibilityFilter />
      </React.Fragment>
    );
  }
}

