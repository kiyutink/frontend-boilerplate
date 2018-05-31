import {TOGGLE_VISIBILITY} from '../constants/actionTypes';

export const toggleVisibility = visiblity => ({
  type: TOGGLE_VISIBILITY,
  visiblity: visiblity
});