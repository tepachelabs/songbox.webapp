import {
  SONGS_QUEUE_ADD_BROKEN_LINK,
  SONGS_QUEUE_SET_SONGS,
  SONGS_QUEUE_SET_SONG_INDEX,
} from '../constants';

export const addBrokenLink = (payload) => ({
  type: SONGS_QUEUE_ADD_BROKEN_LINK,
  payload,
});
export const setSongsQueue = (payload) => ({
  type: SONGS_QUEUE_SET_SONGS,
  payload,
});
export const setSongIndex = (payload) => ({
  type: SONGS_QUEUE_SET_SONG_INDEX,
  payload,
});
