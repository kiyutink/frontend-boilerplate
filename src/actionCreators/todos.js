import {TOGGLE_TODO, ADD_TODO, DELETE_TODO} from '../constants/actionTypes';

export const addTodo = name => ({
  type: ADD_TODO,
  name,
  id: +String(Math.random()).replace('.', '')
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});