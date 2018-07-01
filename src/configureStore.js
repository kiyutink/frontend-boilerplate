import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import todos, * as fromTodos from './reducers/todos';
import throttle from 'lodash/throttle';
import logger from 'redux-logger';
import promise from 'redux-promise';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [promise];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const store = createStore(
  combineReducers({
    todos: todos
  }),
  loadState(),
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
);

store.subscribe(throttle(persistState, 1000));

export {store};

function persistState() {
  window.localStorage.setItem('state', JSON.stringify(store.getState()));
}

function loadState() {
  return JSON.parse(window.localStorage.getItem('state')) || undefined;
}

export const getVisibleTodos = (state, filter) => fromTodos.getVisibleTodos(state.todos, filter);