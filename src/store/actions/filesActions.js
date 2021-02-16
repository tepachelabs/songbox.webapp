import { apiFetchFiles } from 'lib/apiFilesService';
import { filterAndSortFolders, filterAndSortSongs } from 'utils';
import { logError } from 'lib/errorLogger';

import {
  FILES_SET_FILES_LIST,
  FILES_SET_FOLDER_LIST,
  FILES_ADD_CACHED_FILES,
  FILES_SET_IS_LOADING,
} from '../constants';

/* SYNC OPERATIONS */

export const setFilesList = (payload) => ({
  type: FILES_SET_FILES_LIST,
  payload,
});
export const setFoldersList = (payload) => ({
  type: FILES_SET_FOLDER_LIST,
  payload,
});
export const setCachedFiles = (payload) => ({
  type: FILES_ADD_CACHED_FILES,
  payload,
});

export const setFilesLoading = (payload) => ({
  type: FILES_SET_IS_LOADING,
  payload,
});

/* ASYNC OPERATIONS */

export const fetchFileListFromPath = (path) => (dispatch, getState) => {
  const token = getState().app.get('token');
  dispatch(setFilesLoading(true));

  apiFetchFiles(token, path)
    .then(({ data }) => {
      dispatch(setFoldersList(filterAndSortFolders(data)));
      dispatch(setFilesList(filterAndSortSongs(data)));
      dispatch(setCachedFiles({ path, files: data }));
    })
    .catch((err) => {
      logError(err);
    })
    .finally(() => {
      dispatch(setFilesLoading(false));
    });
};

export const getFilesFromPath = (path) => (dispatch, getState) => {
  const files = getState().files.get('cachedFiles');
  const routeFiles = files.get(path);

  if (routeFiles) {
    dispatch(setFoldersList(filterAndSortFolders(routeFiles)));
    dispatch(setFilesList(filterAndSortSongs(routeFiles)));
  } else {
    dispatch(fetchFileListFromPath(path));
  }
};
