import {
  TOGGLE_FAVORITE_IS_PLAYING, REMOVE_FAVORITE, ADD_FAVORITE, SET_FAVORITES,
} from '../favoritesConstants';

export const toggleFavoriteIsPlaying = (payload) => ({ type: TOGGLE_FAVORITE_IS_PLAYING, payload });
export const removeFavorite = (payload) => ({ type: REMOVE_FAVORITE, payload });
export const addFavorite = (payload) => ({ type: ADD_FAVORITE, payload });
export const setFavorites = (payload) => ({ type: SET_FAVORITES, payload });
