import { Map, List } from 'immutable';

import {
  INITIALIZE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_IS_FAVORITE_PLAYING,
} from '../constants';

const initialState = Map({
  songs: List(),
  isPlaying: false,
});

const favoritesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case INITIALIZE_FAVORITES:
    return state.set('songs', payload);

  case ADD_FAVORITE: {
    const favoritesUpdated = state.get('songs').push(payload);
    return state.set('songs', favoritesUpdated);
  }

  case REMOVE_FAVORITE: {
    const favoritesUpdated = state.songs.filter((song) => song.song_name !== payload.song_name);
    return state.set('songs', favoritesUpdated);
  }

  case TOGGLE_IS_FAVORITE_PLAYING:
    return state.set('isPlaying', payload);

  default:
    return state;
  }
};

export default favoritesReducer;
