import { Map, List } from 'immutable';

import {
  FILES_SET_FILES_LIST,
  FILES_SET_FOLDER_LIST,
  FILES_ADD_CACHED_FILES,
} from '../constants';

const initialState = Map({
  folders: List(),
  files: List(),
  cachedFiles: Map(),
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
  default:
    return state;
  }
};
