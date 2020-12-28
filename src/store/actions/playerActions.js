import { apiFetchStreamableSong } from 'lib/apiFetchStreamableSong';

import { setSongIndex } from 'store/actions/songsQueueActions';

import {
  PLAYER_SET_REPEAT,
  PLAYER_SET_VOLUME,
  PLAYER_SET_SONG_LINK,
  PLAYER_SET_CURRENT_SONG,
  PLAYER_SET_IS_PLAYING,
} from '../constants';

export const toggleRepeat = (payload) => ({ type: PLAYER_SET_REPEAT, payload });
export const setVolume = (payload) => ({ type: PLAYER_SET_VOLUME, payload });
export const setSong = (payload) => ({ type: PLAYER_SET_CURRENT_SONG, payload });
export const setSongLink = (payload) => ({ type: PLAYER_SET_SONG_LINK, payload });
export const setIsPlaying = (payload) => ({ type: PLAYER_SET_IS_PLAYING, payload });

export const getSongStreamLink = (path) => (dispatch, getState) => {
  const token = getState().app.get('token');

  apiFetchStreamableSong(token, path)
    .then(({ data }) => {
      const streamableSong = data.url.replace('?dl=0', '?dl=1');
      dispatch(setSongLink(streamableSong));
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const playNextSong = () => (dispatch, getState) => {
  const songIndex = getState().songsQueue.get('index');
  const songsQueue = getState().songsQueue.get('queue');

  const canPlayNextSong = songIndex + 1 <= songsQueue.size;

  if (canPlayNextSong) {
    const nextIndex = songIndex + 1;
    // eslint-disable-next-line no-underscore-dangle
    const nextSongPath = songsQueue.get(nextIndex)._root.entries[2][1];

    dispatch(getSongStreamLink(nextSongPath));
    dispatch(setSongIndex(nextIndex));
  }
};

export const playPreviousSong = () => (dispatch, getState) => {
  const songIndex = getState().songsQueue.get('index');
  const songsQueue = getState().songsQueue.get('queue');

  const canPlayNextSong = songIndex - 1 >= 0;

  if (canPlayNextSong) {
    const nextIndex = songIndex - 1;
    // eslint-disable-next-line no-underscore-dangle
    const nextSongPath = songsQueue.get(nextIndex)._root.entries[2][1];

    dispatch(getSongStreamLink(nextSongPath));
    dispatch(setSongIndex(nextIndex));
  }
};
