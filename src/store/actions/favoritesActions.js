import { Map, fromJS } from 'immutable';

import {
  apiAddFavorite,
  apiFetchFavorites,
  apiDeleteFavorite,
} from 'lib/apiFavoritesService';

import { logError } from 'lib/errorLogger';
import {
  FAVORITES_SET_IS_FAVORITE_PLAYING,
  FAVORITES_REMOVE_FAVORITE,
  FAVORITES_ADD_FAVORITE,
  FAVORITES_INITIALIZE_FAVORITES,
} from '../constants';

export const toggleIsFavoritePlaying = (payload) => ({
  type: FAVORITES_SET_IS_FAVORITE_PLAYING,
  payload,
});

export const removeFavorite = (payload) => ({
  type: FAVORITES_REMOVE_FAVORITE,
  payload,
});
export const addFavorite = (payload) => ({
  type: FAVORITES_ADD_FAVORITE,
  payload,
});
export const initializeFavorites = (payload) => ({
  type: FAVORITES_INITIALIZE_FAVORITES,
  payload,
});

export const createFavorite = (body) => (dispatch, getState) => {
  const token = getState().app.get('token');

  apiAddFavorite(token, body)
    .then(({ data }) => {
      const songData = Map(data);
      dispatch(addFavorite(songData));
    })
    .catch((error) => {
      logError(error);
    });
};

export const deleteFavorite = (body) => (dispatch, getState) => {
  const token = getState().app.get('token');

  apiDeleteFavorite(token, body)
    .then(() => {
      dispatch(removeFavorite(Map(body)));
    })
    .catch((error) => {
      logError(error);
    });
};

export const fetchFavoritesSongs = () => (dispatch, getState) => {
  const token = getState().app.get('token');
  const isSessionToken = !!token;

  if (isSessionToken) {
    apiFetchFavorites(token)
      .then((result) => {
        dispatch(initializeFavorites(fromJS(result.data)));
      })
      .catch((error) => {
        logError(error);
      });
  }
};

export const handleInteractionWithFavorite = (isFavorite, body) => (
  dispatch,
) => {
  if (isFavorite) {
    dispatch(deleteFavorite(body));
  } else {
    dispatch(createFavorite(body));
  }
};
