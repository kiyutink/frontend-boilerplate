import {DELETE_TODO_SUCCESS} from '../constants/actionTypes';

export default (state = {}, action) => {

  if (action.type === DELETE_TODO_SUCCESS) {
    const newState = {...state};
    delete newState[action.id];
    return newState;
  }

  if (action.response) {
    return {
      ...state,
      ...action.response.entities.todos
    };
  }
  else {
    return state;
  }
};

export const getTodo = (state, id) => state[id];