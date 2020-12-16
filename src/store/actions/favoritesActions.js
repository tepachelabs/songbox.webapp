import {
  TOGGLE_IS_FAVORITE_PLAYING, REMOVE_FAVORITE, ADD_FAVORITE, INITIALIZE_FAVORITES,
} from '../constants/favorites';

export const toggleIsFavoritePlaying = (payload) => ({ type: TOGGLE_IS_FAVORITE_PLAYING, payload });
export const removeFavorite = (payload) => ({ type: REMOVE_FAVORITE, payload });
export const addFavorite = (payload) => ({ type: ADD_FAVORITE, payload });
export const initializeFavorites = (payload) => ({ type: INITIALIZE_FAVORITES, payload });
