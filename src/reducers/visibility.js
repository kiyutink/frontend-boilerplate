import {TOGGLE_VISIBILITY} from '../constants/actionTypes';

export const visibility = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case TOGGLE_VISIBILITY:
      return action.visiblity;
    default:
      return state;
  }
};