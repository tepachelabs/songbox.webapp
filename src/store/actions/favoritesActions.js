import { Map, fromJS } from 'immutable';
import swal from 'sweetalert';

import {
  createFavoriteService,
  getFavoriteSongsService,
} from 'lib/apiFavoritesService';

import { isSongInFavorites } from 'utils/favorites';

import {
  FAVORITES_SET_IS_FAVORITE_PLAYING,
  FAVORITES_REMOVE_FAVORITE,
  FAVORITES_ADD_FAVORITE,
  FAVORITES_INITIALIZE_FAVORITES,
} from '../constants';

export const toggleIsFavoritePlaying = (payload) => ({
  type: FAVORITES_SET_IS_FAVORITE_PLAYING, payload,
});

export const removeFavorite = (payload) => ({ type: FAVORITES_REMOVE_FAVORITE, payload });
export const addFavorite = (payload) => ({ type: FAVORITES_ADD_FAVORITE, payload });
export const initializeFavorites = (payload) => ({ type: FAVORITES_INITIALIZE_FAVORITES, payload });

export const createFavorite = (fileName, path) => (dispatch, getState) => {
  const token = getState().app.get('token');
  const favorites = getState().favorites.get('songs');

  const body = {
    song_name: fileName,
    path_lower: path,
  };

  if (!isSongInFavorites(favorites, path)) {
    createFavoriteService(token, body)
      .then(({ data }) => {
        const songData = Map(data);
        dispatch(addFavorite(songData));
      })
      .catch(() => {
        swal({
          text: 'Favorites service not available.',
          icon: 'error',
        });
      });
  }
};

export const fetchFavoritesSongs = () => (dispatch, getState) => {
  const token = getState().app.get('token');

  getFavoriteSongsService(token)
    .then((result) => {
      dispatch(initializeFavorites(fromJS(result.data)));
    })
    .catch(() => {
      swal({
        text: 'Favorites service not available.',
        icon: 'error',
      });
    });
};
