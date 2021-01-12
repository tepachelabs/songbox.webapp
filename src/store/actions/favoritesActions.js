import { Map } from 'immutable';
import swal from 'sweetalert';

import {
  createFavoriteService,
} from 'lib/apiFavoritesService';

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
  const body = {
    song_name: fileName,
    path_lower: path,
  };

  createFavoriteService(token, body)
    .then((result) => {
      const songData = Map(result.data);
      dispatch(addFavorite(songData));
    })
    .catch(() => {
      swal({
        text: 'Favorites service not available.',
        icon: 'error',
      });
    });
};
