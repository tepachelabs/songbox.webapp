import {
  TOGGLE_REPEAT, SET_VOLUME, SET_SONG_LINK, SET_CURRENT_SONG,
} from '../constants';

export const toggleRepeat = (payload) => ({ type: TOGGLE_REPEAT, payload });
export const setVolume = (payload) => ({ type: SET_VOLUME, payload });
export const setSong = (payload) => ({ type: SET_CURRENT_SONG, payload });
export const setSongLink = (payload) => ({ type: SET_SONG_LINK, payload });
