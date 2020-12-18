import {
  PLAYER_SET_REPEAT,
  PLAYER_SET_VOLUME,
  PLAYER_SET_SONG_LINK,
  PLAYER_SET_CURRENT_SONG,
} from '../constants';

export const toggleRepeat = (payload) => ({ type: PLAYER_SET_REPEAT, payload });
export const setVolume = (payload) => ({ type: PLAYER_SET_VOLUME, payload });
export const setSong = (payload) => ({ type: PLAYER_SET_CURRENT_SONG, payload });
export const setSongLink = (payload) => ({ type: PLAYER_SET_SONG_LINK, payload });
