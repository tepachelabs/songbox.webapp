import {
  TOGGLE_REPEAT, SET_CURRENT_SONG, SET_VOLUME, SET_SONG_LINK,
} from '../constants/player';

const defaultPlayer = {
  onRepeat: false,
  currentSong: undefined,
  volume: 0.5,
  songLink: '',
};

const playerReducer = (state = defaultPlayer, { type, payload }) => {
  switch (type) {
  case TOGGLE_REPEAT:
    return { ...state, onRepeat: payload };

  case SET_CURRENT_SONG:
    return { ...state, currentSong: payload };

  case SET_VOLUME:
    return { ...state, volume: payload };

  case SET_SONG_LINK:
    return { ...state, songLink: payload };

  default:
    return state;
  }
};

export default playerReducer;
