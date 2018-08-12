import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  ADD_TODO_SUCCESS,
  TOGGLE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS
} from '../constants/actionTypes';
import {combineReducers} from 'redux';
import {complete, incomplete} from '../constants/todoFilterValues';

export default filter => {

  const handleToggle = (state, action) => {
    const {result: toggledId, entities} = action.response;
    const isCompleted = entities.todos[toggledId].isCompleted;

    const shouldRemove = isCompleted && filter === incomplete ||
      !isCompleted && filter === complete;

    return shouldRemove ? state.filter(id => id !== toggledId) : state;
  };

  const ids = (state = [], action) => {
    switch (action.type) {
      case FETCH_TODOS_SUCCESS:
        return filter === action.filter
          ? action.response.result
          : state;
      case ADD_TODO_SUCCESS:
        return filter === complete
          ? state
          : [...state, action.response.result];
      case TOGGLE_TODO_SUCCESS:
        return handleToggle(state, action);
      case DELETE_TODO_SUCCESS:
        return state.filter(id => id !== action.id);
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {

    if (action.filter !== filter) {
      return state;
    }

    switch (action.type) {
      case FETCH_TODOS_REQUEST:
        return true;

      case FETCH_TODOS_FAILURE:
      case FETCH_TODOS_SUCCESS:
        return false;

      default:
        return state;
    }
  };

  const errorMessage = (state = '', action) => {
    if (action.filter !== filter) {
      return state;
    }

    switch (action.type) {
      case FETCH_TODOS_FAILURE:
        return action.message;

      case FETCH_TODOS_REQUEST:
      case FETCH_TODOS_SUCCESS:
        return '';

      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
    errorMessage
  });
};

export const getIds = state => state.ids;

export const getIsFetching = state => state.isFetching;

export const getErrorMessage = state => state.errorMessage;