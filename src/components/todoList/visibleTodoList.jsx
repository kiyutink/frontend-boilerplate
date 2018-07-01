import * as React from 'react';
import PropTypes from 'prop-types';
import {TodoList} from './todoList';
import {connect} from 'react-redux';
import {toggleTodo, deleteTodo, renameTodo, fetchTodos} from '../../actionCreators/todos';
import {withRouter} from 'react-router';
import {getVisibleTodos} from '../../configureStore';
import {all} from '../../constants/todoFilterValues';

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state, ownProps.match.params.filter),
  filter: ownProps.match.params.filter || all
});

const mapDispatchToProps = {
  onTodoClick: toggleTodo,
  onDeleteTodo: deleteTodo,
  onRenameTodo: renameTodo,
  fetchTodos
};

class VisibleTodoList extends React.Component {
  static propTypes = {
    filter: PropTypes.string,
    fetchTodos: PropTypes.func
  }

  componentDidMount() {
    this.props.fetchTodos(this.props.filter);
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.props.fetchTodos(this.props.filter);
    }
  }

  render() {
    return <TodoList {...this.props} />;
  }
}

VisibleTodoList = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList)
);

export {VisibleTodoList};