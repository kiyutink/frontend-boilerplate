import {ADD_TODO, TOGGLE_TODO, RENAME_TODO} from '../constants/actionTypes';

export const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        name: action.name,
        isCompleted: false
      };
    case TOGGLE_TODO:
      if (action.id !== state.id) {
        return state;
      }
      return {
        ...state,
        isCompleted: !state.isCompleted
      };
    case RENAME_TODO:
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};