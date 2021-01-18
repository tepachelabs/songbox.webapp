import { apiFetchStreamableSong } from 'lib/apiFetchStreamableSong';

import { setSongIndex } from 'store/actions/songsQueueActions';

import {
  PLAYER_SET_REPEAT,
  PLAYER_SET_VOLUME,
  PLAYER_SET_SONG_LINK,
  PLAYER_SET_CURRENT_SONG,
  PLAYER_SET_IS_PLAYING,
  PLAYER_SET_RANDOM,
} from '../constants';

import {
  canPlayNextSong,
  canPlayPreviousSong,
  selectIndex,
  selectSongPathAtIndex,
} from '../selectors/songsQueue';

export const setRepeat = (payload) => ({ type: PLAYER_SET_REPEAT, payload });
export const setVolume = (payload) => ({ type: PLAYER_SET_VOLUME, payload });
export const setSong = (payload) => ({ type: PLAYER_SET_CURRENT_SONG, payload });
export const setSongLink = (payload) => ({ type: PLAYER_SET_SONG_LINK, payload });
export const setIsPlaying = (payload) => ({ type: PLAYER_SET_IS_PLAYING, payload });
export const setRandom = (payload) => ({ type: PLAYER_SET_RANDOM, payload });

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
  const state = getState();
  const songIndex = selectIndex(state);

  if (canPlayNextSong(state)) {
    const nextIndex = songIndex + 1;
    const songPath = selectSongPathAtIndex(state, nextIndex);

    dispatch(getSongStreamLink(songPath));
    dispatch(setSongIndex(nextIndex));
  }
};

export const playPreviousSong = () => (dispatch, getState) => {
  const state = getState();
  const songIndex = selectIndex(state);

  if (canPlayPreviousSong(state)) {
    const nextIndex = songIndex - 1;
    const songPath = selectSongPathAtIndex(state, nextIndex);

    dispatch(getSongStreamLink(songPath));
    dispatch(setSongIndex(nextIndex));
  }
};
