import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './todo.scss';

export class Todo extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.onClick(this.props.id);
  }

  handleDeleteTodo = () => {
    this.props.onDelete(this.props.id);
  }

  render() {
    return (
      <div
        className={classNames(
          'todo',
          this.props.isCompleted && 'todo_completed'
        )}
      >
        <h5
          onClick={this.handleClick}
        >
          {this.props.name}
        </h5>
        <button onClick={this.handleDeleteTodo}>x</button>
      </div>
    );
  }
}