import {createStore, combineReducers} from 'redux';
import {todos} from './reducers/todos';
import {visibility} from './reducers/visibility';
import throttle from 'lodash/throttle';


export const store = createStore(
  combineReducers({
    todos: todos,
    visibility: visibility
  }),
  loadState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(throttle(persistState, 1000));

function persistState() {
  window.localStorage.setItem('state', JSON.stringify(store.getState()));
}

function loadState() {
  return JSON.parse(window.localStorage.getItem('state')) || undefined;
}
