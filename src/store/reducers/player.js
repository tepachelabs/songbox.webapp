import { Map, List } from 'immutable';

import {
  PLAYER_SET_CURRENT_SONG,
  PLAYER_SET_IS_LOADING,
  PLAYER_SET_PLAYLIST,
} from '../constants';

const defaultPlayer = Map({
  currentSong: null,
  isLoading: false,
  playlist: List(),
});

const playerReducer = (state = defaultPlayer, { type, payload }) => {
  switch (type) {
    case PLAYER_SET_CURRENT_SONG:
      return state.set('currentSong', payload);

    case PLAYER_SET_IS_LOADING:
      return state.set('isLoading', payload);

    case PLAYER_SET_PLAYLIST:
      return state.set('playlist', payload);

    default:
      return state;
  }
};

export default playerReducer;
