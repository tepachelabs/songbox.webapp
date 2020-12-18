import { Map } from 'immutable';

import {
  PLAYER_SET_REPEAT, PLAYER_SET_CURRENT_SONG, PLAYER_SET_VOLUME, PLAYER_SET_SONG_LINK,
} from '../constants';

const defaultPlayer = Map({
  onRepeat: false,
  currentSong: undefined,
  volume: 0.5,
  songLink: '',
});

const playerReducer = (state = defaultPlayer, { type, payload }) => {
  switch (type) {
  case PLAYER_SET_REPEAT:
    return state.set('onRepeat', payload);

  case PLAYER_SET_CURRENT_SONG:
    return state.set('currentSong', payload);

  case PLAYER_SET_VOLUME:
    return state.set('volume', payload);

  case PLAYER_SET_SONG_LINK:
    return state.set('songLink', payload);

  default:
    return state;
  }
};

export default playerReducer;
