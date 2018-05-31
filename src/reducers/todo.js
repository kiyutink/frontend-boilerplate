import {ADD_TODO, TOGGLE_TODO} from '../constants/actionTypes';

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
    default:
      return state;
  }
};