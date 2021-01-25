import { Map, List } from 'immutable';

import {
  FAVORITES_INITIALIZE_FAVORITES,
  FAVORITES_ADD_FAVORITE,
  FAVORITES_REMOVE_FAVORITE,
  FAVORITES_SET_IS_FAVORITE_PLAYING,
} from '../constants';

const initialState = Map({
  songs: List(),
  isPlaying: false,
});

const favoritesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case FAVORITES_INITIALIZE_FAVORITES:
    return state.set('songs', payload);

  case FAVORITES_ADD_FAVORITE: {
    const itemIndex = state.get('songs').findIndex((song) => song.get('song_name') === payload.get('song_name'));
    const songs = state.get('songs');
    const updatedSongs = songs.push(payload);
    return itemIndex > -1 ? state : state.set('songs', updatedSongs);
  }

  case FAVORITES_REMOVE_FAVORITE: {
    const favoritesUpdated = state.get('songs').filter((song) => song.get('path_lower') !== payload.get('path'));
    return state.set('songs', favoritesUpdated);
  }

  case FAVORITES_SET_IS_FAVORITE_PLAYING:
    return state.set('isPlaying', payload);

  default:
    return state;
  }
};

export default favoritesReducer;
