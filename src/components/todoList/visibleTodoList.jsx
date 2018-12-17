import * as React from 'react';
import PropTypes from 'prop-types';
import {TodoList} from './todoList';
import {connect} from 'react-redux';
import {
  toggleTodo,
  deleteTodo,
  renameTodo,
  fetchTodos
} from '../../actionCreators';
import {withRouter} from 'react-router';
import {getVisibleTodos, getIsFetching, getErrorMessage} from '../../reducers';
import {all} from '../../constants/todoFilterValues';
import {FetchError} from '../fetchError';

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state, ownProps.match.params.filter || all),
  filter: ownProps.match.params.filter || all,
  isFetching: getIsFetching(state, ownProps.match.params.filter || all),
  errorMessage: getErrorMessage(state, ownProps.match.params.filter || all)
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
    fetchTodos: PropTypes.func,
    isFetching: PropTypes.bool,
    todos: PropTypes.arrayOf(PropTypes.object),
    errorMessage: PropTypes.string
  };

  fetchData = () => this.props.fetchTodos(this.props.filter);

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  render() {
    if (this.props.isFetching && !this.props.todos.length) {
      return <div>Loading...</div>;
    }

    if (this.props.errorMessage && !this.props.todos.length) {
      return (
        <FetchError
          message={this.props.errorMessage}
          onRetry={this.fetchData}
        />
      );
    }

    return <TodoList {...this.props} />;
  }
}

VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(VisibleTodoList)
);

export {VisibleTodoList};
