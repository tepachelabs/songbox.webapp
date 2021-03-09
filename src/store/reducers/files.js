import { Map, List } from 'immutable';

import {
  FILES_SET_FILES_LIST,
  FILES_SET_FOLDER_LIST,
  FILES_SET_IS_LOADING,
} from '../constants';

const byName = (a, b) => a.get('name').localeCompare(b.get('name'));

const initialState = Map({
  folders: List(),
  files: List(),
  isLoading: false,
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FILES_SET_FILES_LIST:
      return state.set('files', payload.sort(byName));
    case FILES_SET_FOLDER_LIST:
      return state.set('folders', payload.sort(byName));
    case FILES_SET_IS_LOADING:
      return state.set('isLoading', payload);
    default:
      return state;
  }
};
