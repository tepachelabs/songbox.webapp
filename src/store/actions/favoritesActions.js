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
