import {
  TOGGLE_TODO,
  ADD_TODO,
  DELETE_TODO,
  RENAME_TODO,
  RECEIVE_TODOS
} from '../constants/actionTypes';
import {Api} from '../api';

export const addTodo = name => ({
  type: ADD_TODO,
  name,
  id: Math.random().toFixed(10)
    .split('.')[1]
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});

export const renameTodo = (id, name) => ({
  type: RENAME_TODO,
  id,
  name
});

const receiveTodos = response => ({
  type: RECEIVE_TODOS,
  response
});

export const fetchTodos = filter => Api.fetchTodos(filter).then(receiveTodos);