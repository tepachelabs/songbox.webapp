import {
  INITIALIZE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_IS_FAVORITE_PLAYING,
} from '../constants/favorites';

const initialState = {
  songs: [],
  isPlaying: false,
};

const favoritesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case INITIALIZE_FAVORITES:
    return {
      ...state,
      songs: payload,
    };

  case ADD_FAVORITE:
    return {
      ...state,
      songs: state.songs.concat(payload),
    };

  case REMOVE_FAVORITE:
    return {
      ...state,
      songs: state.songs.filter((song) => song.song_name !== payload.song_name),
    };

  case TOGGLE_IS_FAVORITE_PLAYING:
    return {
      ...state,
      isPlaying: payload,
    };

  default:
    return state;
  }
};

export default favoritesReducer;
