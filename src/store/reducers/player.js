import {
  SET_ON_REPEAT, SET_CURRENT_SONG, SET_VOLUME, SET_SONG_LINK, CHANGE_SONG_INDEX,
} from '../playerConstants';

const defaultPlayer = {
  currentSong: undefined,
  onRepeat: false,
  songIndex: 0,
  songLink: '',
  volume: 0.5,
};

const playerReducer = (state = defaultPlayer, { type, payload }) => {
  switch (type) {
  case SET_CURRENT_SONG:
    return { ...state, currentSong: payload };

  case SET_ON_REPEAT:
    return { ...state, onRepeat: payload };

  case CHANGE_SONG_INDEX:
    return { ...state, songIndex: payload };

  case SET_SONG_LINK:
    return { ...state, songLink: payload };

  case SET_VOLUME:
    return { ...state, volume: payload };

  default:
    return state;
  }
};

export default playerReducer;
