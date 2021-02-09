import { Map, List } from 'immutable';

import {
  FILES_SET_FILES_LIST,
  FILES_SET_FOLDER_LIST,
  FILES_ADD_CACHED_FILES,
  FILES_SET_IS_LOADING,
} from '../constants';

const initialState = Map({
  cachedFiles: Map(),
  folders: List(),
  files: List(),
  isLoading: false,
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case FILES_SET_FILES_LIST:
    return state.set('files', payload);
  case FILES_SET_FOLDER_LIST:
    return state.set('folders', payload);
  case FILES_ADD_CACHED_FILES: {
    const { path, files } = payload;
    const cachedFilesUpdated = state.get('cachedFiles').set(path, files);
    return state.set('cachedFiles', cachedFilesUpdated);
  }
  case FILES_SET_IS_LOADING:
    return state.set('isLoading', payload);
  default:
    return state;
  }
};
