import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../../actionCreators/todos';
import PropTypes from 'prop-types';

class AddTodoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoName: ''
    };
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  updateNewTodoName = e => {
    this.setState({
      newTodoName: e.target.value
    });
  }


  handleAddTodo = () => {
    if (!this.state.newTodoName) {
      return;
    }
    this.props.dispatch(
      addTodo(this.state.newTodoName)
    );
    this.setState({
      newTodoName: ''
    });
  }

  render() {
    return (
      <React.Fragment>
        <input
          type='text'
          value={this.state.newTodoName}
          onChange={this.updateNewTodoName}
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