import { Map } from 'immutable';

import {
  PLAYER_SET_REPEAT,
  PLAYER_SET_CURRENT_SONG,
  PLAYER_SET_VOLUME,
  PLAYER_SET_SONG_LINK,
  PLAYER_SET_IS_PLAYING,
  PLAYER_SET_RANDOM,
  PLAYER_SET_IS_LOADING,
} from '../constants';

const defaultPlayer = Map({
  currentSong: undefined,
  isLoading: false,
  isRandom: false,
  isRepeat: false,
  isPlaying: false,
  songLink: '',
  volume: 0.5,
});

const playerReducer = (state = defaultPlayer, { type, payload }) => {
  switch (type) {
  case PLAYER_SET_REPEAT:
    return state.set('isRepeat', payload);

  case PLAYER_SET_CURRENT_SONG:
    return state.set('currentSong', payload);

  case PLAYER_SET_VOLUME:
    return state.set('volume', payload);

  case PLAYER_SET_SONG_LINK:
    return state.set('songLink', payload);

  case PLAYER_SET_IS_PLAYING:
    return state.set('isPlaying', payload);

  case PLAYER_SET_RANDOM:
    return state.set('isRandom', payload);

  case PLAYER_SET_IS_LOADING:
    return state.set('isLoading', payload);

  default:
    return state;
  }
};

export default playerReducer;
