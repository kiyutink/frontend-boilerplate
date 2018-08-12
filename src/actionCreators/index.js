import {
  TOGGLE_TODO_SUCCESS,
  ADD_TODO_SUCCESS,
  RENAME_TODO_SUCCESS,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST,
  DELETE_TODO_SUCCESS
} from '../constants/actionTypes';
import {Api} from '../api';
import {getIsFetching} from '../reducers';
import {normalize} from 'normalizr';
import * as schema from './schema';

export const addTodo = name => dispatch =>
  Api.addTodo(name).then(response => {
    dispatch({
      type: ADD_TODO_SUCCESS,
      response: normalize(response, schema.todo)
    });
  });

export const toggleTodo = id => dispatch =>
  Api.toggleTodo(id).then(response => {
    dispatch({
      type: TOGGLE_TODO_SUCCESS,
      response: normalize(response, schema.todo)
    });
  });

export const deleteTodo = id => dispatch =>
  Api.deleteTodo(id).then(() => {
    dispatch({
      type: DELETE_TODO_SUCCESS,
      id
    });
  });

export const renameTodo = (id, name) => dispatch =>
  Api.renameTodo(id, name).then(response => {
    dispatch({
      type: RENAME_TODO_SUCCESS,
      response: normalize(response, schema.todo)
    });
  });

export const fetchTodos = filter => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: FETCH_TODOS_REQUEST,
    filter
  });


  return Api.fetchTodos(filter)
    .then(
      response => dispatch({
        type: FETCH_TODOS_SUCCESS,
        filter,
        response: normalize(response, schema.arrayOfTodos)
      }),
      err => dispatch({
        type: FETCH_TODOS_FAILURE,
        filter,
        message: err.message || 'Oopsie woopsie, fucko boingo'
      }),
    );
};
