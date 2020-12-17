import { Map } from 'immutable';

import {
  TOGGLE_REPEAT, SET_CURRENT_SONG, SET_VOLUME, SET_SONG_LINK,
} from '../constants';

const defaultPlayer = Map({
  onRepeat: false,
  currentSong: undefined,
  volume: 0.5,
  songLink: '',
});

const playerReducer = (state = defaultPlayer, { type, payload }) => {
  switch (type) {
  case TOGGLE_REPEAT:
    return state.set('onRepeat', payload);

  case SET_CURRENT_SONG:
    return state.set('currentSong', payload);

  case SET_VOLUME:
    return state.set('volume', payload);

  case SET_SONG_LINK:
    return state.set('songLink', payload);

  default:
    return state;
  }
};

export default playerReducer;
