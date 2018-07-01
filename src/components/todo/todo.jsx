import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './todo.scss';

export class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: ''
    };
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onRename: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.onClick(this.props.id);
  }

  handleNewNameChange = e => {
    this.setState({
      newName: e.target.value
    });
  }

  handleDeleteTodo = () => {
    this.props.onDelete(this.props.id);
  }

  handleRename = () => {
    this.props.onRename(
      this.props.id,
      this.state.newName
    );
    this.setState({
      newName: ''
    });
  }

  handleKeyDown = e => {
    if (e.which === 13) {
      this.handleRename();
    }
  };

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
        <input
          type='text'
          value={this.state.newName}
          onChange={this.handleNewNameChange}
          onKeyDown={this.handleKeyDown}
        />
        <button
          onClick={this.handleRename}
        >
          rename
        </button>
        <br />
        <button onClick={this.handleDeleteTodo}>x</button>
      </div>
    );
  }
}