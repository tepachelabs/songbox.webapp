import { ADD_BROKEN_LINK, CHANGE_SONGS_QUEUE, SET_SONG_INDEX } from '../constants';

export const addBrokenLink = (payload) => ({ type: ADD_BROKEN_LINK, payload });
export const changeSongsQueue = (payload) => ({ type: CHANGE_SONGS_QUEUE, payload });
export const setSongIndex = (payload) => ({ type: SET_SONG_INDEX, payload });
