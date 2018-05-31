import {todo} from './todo';
import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from '../constants/actionTypes';

export const todos = (state = [
  {
    id: 1,
    name: 'first',
    isCompleted: false
  }
], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];
    case DELETE_TODO:
      return state.filter(t => t.id !== action.id);
    case TOGGLE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};