import {todo} from './todo';
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  RENAME_TODO,
  RECEIVE_TODOS
} from '../constants/actionTypes';
import {combineReducers} from 'redux';
import {all, complete, incomplete} from '../constants/todoFilterValues';
import omit from 'lodash/omit';


const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TODOS: {
      const newState = {...state};
      for (const todo of action.response) {
        newState[todo.id] = todo;
      }
      return newState;
    }
    case TOGGLE_TODO:
    case ADD_TODO:
      return {
        ...state,
        [action.id]: todo(state[action.id], action)
      };
    case DELETE_TODO:
      return omit(state, action.id);
    case RENAME_TODO:
      return {
        ...state,
        [action.id]: todo(state[action.id], action)
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      return [
        ...state,
        ...action.response.map(td => td.id)
      ];
    case ADD_TODO:
      return [...state, action.id];
    case DELETE_TODO:
      return state.filter(id => id !== action.id);
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  allIds
});

const getAllTodos = state => state.allIds.map(id => state.byId[id]);

export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state);
  switch (filter) {
    case all:
      return allTodos;
    case complete:
      return allTodos.filter(t => t.isCompleted);
    case incomplete:
      return allTodos.filter(t => !t.isCompleted);
    default:
      return allTodos;
  }
};
