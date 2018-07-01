import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import todos, * as fromTodos from './reducers/todos';
import throttle from 'lodash/throttle';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const addPromiseSupportToDispatch = () => next => action => {
  if (typeof action.then === 'function') {
    return action.then(next);
  }
  else {
    return next(action);
  }
};

const addLoggingToDispatch = store => next => action => {
  console.group(action.type);
  console.log('%c prev state:', 'color: green', store.getState());
  console.log('%c action', 'color: red', action);
  const retVal = next(action);
  console.log('%c next state', 'color: blue', store.getState());
  console.groupEnd(action.type);
  return retVal;
};

const middlewares = [];

middlewares.push(addPromiseSupportToDispatch);

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(addLoggingToDispatch);
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