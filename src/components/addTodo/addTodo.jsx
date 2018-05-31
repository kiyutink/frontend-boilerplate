import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../../actionCreators/todos';
import PropTypes from 'prop-types';

class AddTodoComponent extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  handleAddTodo = () => {
    if (!this.input.value) {
      return;
    }
    this.props.dispatch(addTodo(this.input.value));
    this.input.value = '';
  }

  render() {
    return (
      <React.Fragment>
        <input
          type='text'
          ref={el => {
            this.input = el;
          }}
        />
        <button
          onClick={this.handleAddTodo}
        >
          add
        </button>
      </React.Fragment>
    );
  }
}

export const AddTodo = connect()(AddTodoComponent);