import {TodoList} from './todoList';
import {connect} from 'react-redux';
import {toggleTodo, deleteTodo} from '../../actionCreators/todos';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.isCompleted);
    case 'SHOW_INCOMPLETE':
      return todos.filter(t => !t.isCompleted);
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibility)
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(
    toggleTodo(id)
  ),

  onDeleteTodo: id => dispatch(
    deleteTodo(id)
  )
});

export const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);