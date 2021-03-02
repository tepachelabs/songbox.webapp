import { fromJS } from 'immutable';

import { apiFetchFiles } from 'lib/apiFilesService';
import { logError } from 'lib/errorLogger';

import {
  FILES_SET_FILES_LIST,
  FILES_SET_FOLDER_LIST,
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

export const setFilesLoading = (payload) => ({
  type: FILES_SET_IS_LOADING,
  payload,
});

/* ASYNC OPERATIONS */

export const getContentsFromPath = (path) => (dispatch, getState) => {
  const token = getState().app.get('token');

  dispatch(setFilesLoading(true));

  apiFetchFiles(token, path)
    .then(({ data }) => {
      const newState = fromJS(data);
      dispatch(setFoldersList(newState.get('folders')));
      dispatch(setFilesList(newState.get('files')));
    })
    .catch((err) => {
      logError(err);
    })
    .finally(() => {
      dispatch(setFilesLoading(false));
    });
};
