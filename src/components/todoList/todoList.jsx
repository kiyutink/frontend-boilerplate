import React from "react";
import { Todo } from "../todo/todo";
import PropTypes from "prop-types";

export class TodoList extends React.Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onTodoClick: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onRenameTodo: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        {this.props.todos.map(t => (
          <Todo
            key={t.id}
            id={t.id}
            name={t.name}
            isCompleted={t.isCompleted}
            onClick={this.props.onTodoClick}
            onDelete={this.props.onDeleteTodo}
            onRename={this.props.onRenameTodo}
          />
        ))}
      </div>
    );
  }
}
