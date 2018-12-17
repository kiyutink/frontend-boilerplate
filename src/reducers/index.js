import {combineReducers} from 'redux';
import {all, complete, incomplete} from '../constants/todoFilterValues';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
  all: createList(all),
  incomplete: createList(incomplete),
  complete: createList(complete)
});

export default combineReducers({
  byId,
  listByFilter
});

export const getVisibleTodos = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getTodo(state.byId, id));
};

export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.listByFilter[filter]);

export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.listByFilter[filter]);
