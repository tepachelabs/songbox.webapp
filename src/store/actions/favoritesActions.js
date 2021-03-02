import { fromJS } from 'immutable';

import {
  apiCreateFavorite,
  apiReadFavorites,
  apiDeleteFavorite,
} from 'lib/apiFavoritesService';

import { logError } from 'lib/errorLogger';
import { setFilesList, setFilesLoading } from './filesActions';

/* SYNC OPERATIONS */

/* ASYNC OPERATIONS */

export const createFavorite = ({ name, path }) => (dispatch, getState) => {
  const token = getState().app.get('token');

  apiCreateFavorite(token, name, path)
    .then(({ data }) => {
      const files = getState().files.get('files');
      const key = files.findKey((val) => val.get('path') === path);
      const newFilesState = files.update(key, (value) =>
        value.set('isFavorite', true).set('favoriteId', data.favoriteId),
      );
      dispatch(setFilesList(newFilesState));
    })
    .catch((error) => {
      logError(error);
    });
};

export const deleteFavorite = (id) => (dispatch, getState) => {
  const token = getState().app.get('token');

  apiDeleteFavorite(token, id)
    .then(() => {
      const files = getState().files.get('files');
      const key = files.findKey((val) => val.get('favoriteId') === id);
      const newFilesState = files.update(key, (value) =>
        value.set('isFavorite', false).set('favoriteId', null),
      );
      dispatch(setFilesList(newFilesState));
    })
    .catch((error) => {
      logError(error);
    });
};

export const getFavorites = () => (dispatch, getState) => {
  const token = getState().app.get('token');

  dispatch(setFilesLoading(true));

  apiReadFavorites(token)
    .then(({ data }) => {
      const newState = fromJS(data);
      dispatch(setFilesList(newState));
    })
    .catch((error) => {
      logError(error);
    })
    .finally(() => {
      dispatch(setFilesLoading(false));
    });
};
