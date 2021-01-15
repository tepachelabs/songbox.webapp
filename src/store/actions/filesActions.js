import { apiFetchFiles } from 'lib/apiFilesService';
import { getFolders, getSongs } from 'utils/files';
import {
  FILES_SET_FILES_LIST,
  FILES_SET_FOLDER_LIST,
  FILES_ADD_CACHED_FILES,
} from '../constants';

/* SYNC OPERATIONS */

export const setFilesList = (payload) => ({ type: FILES_SET_FILES_LIST, payload });
export const setFoldersList = (payload) => ({ type: FILES_SET_FOLDER_LIST, payload });
export const setCachedFiles = (payload) => ({ type: FILES_ADD_CACHED_FILES, payload });

/* ASYNC OPERATIONS */

export const fetchFileListFromPath = (path) => (dispatch, getState) => {
  const token = getState().app.get('token');

  apiFetchFiles(token, path)
    .then(({ data }) => {
      dispatch(setFoldersList(getFolders(data)));
      dispatch(setFilesList(getSongs(data)));
      dispatch(setCachedFiles({ path, files: data }));
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const getFilesFromPath = (path) => (dispatch, getState) => {
  const files = getState().files.get('cachedFiles');
  const routeFiles = files.get(path);

  if (routeFiles) {
    dispatch(setFoldersList(getFolders(routeFiles)));
    dispatch(setFilesList(getSongs(routeFiles)));
  } else {
    dispatch(fetchFileListFromPath(path));
  }
};
