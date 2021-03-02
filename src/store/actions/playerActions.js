import { Map } from 'immutable';

import { apiFetchStreamableSong } from 'lib/apiFetchStreamableSong';
import { logError } from 'lib/errorLogger';

import {
  PLAYER_SET_CURRENT_SONG,
  PLAYER_SET_IS_LOADING,
  PLAYER_SET_PLAYLIST,
} from '../constants';

/* SYNC OPERATIONS */

export const setCurrentSong = (payload) => ({
  type: PLAYER_SET_CURRENT_SONG,
  payload,
});
export const setIsLoading = (payload) => ({
  type: PLAYER_SET_IS_LOADING,
  payload,
});
export const setPlaylist = (payload) => ({
  type: PLAYER_SET_PLAYLIST,
  payload,
});

/* ASYNC OPERATIONS */

export const playAudio = (path) => (dispatch, getState) => {
  const token = getState().app.get('token');
  dispatch(setIsLoading(true));

  apiFetchStreamableSong(token, path)
    .then(({ data }) => {
      dispatch(setCurrentSong(Map(data)));

      const files = getState().files.get('files');
      const key = files.findKey((file) => file.get('path') === data.path);
      const newPlaylist = files.slice(key + 1).concat(files.slice(0, key));

      dispatch(setPlaylist(newPlaylist));
    })
    .catch((err) => {
      logError(err);
    })
    .finally(() => {
      dispatch(setIsLoading(false));
    });
};

export const loadNextSong = () => (dispatch, getState) => {
  const currentPlaylist = getState().player.get('playlist');

  if (!currentPlaylist.size) return;

  const token = getState().app.get('token');
  dispatch(setIsLoading(true));

  const previousSong = getState().player.get('currentSong');
  const nextSong = currentPlaylist.first();
  const newPlaylist = currentPlaylist.shift().push(previousSong);

  dispatch(setPlaylist(newPlaylist));

  apiFetchStreamableSong(token, nextSong.get('path'))
    .then(({ data }) => {
      dispatch(setCurrentSong(Map(data)));
    })
    .catch((err) => {
      logError(err);
    })
    .finally(() => {
      dispatch(setIsLoading(false));
    });
};

export const loadPreviousSong = () => (dispatch, getState) => {
  const currentPlaylist = getState().player.get('playlist');

  if (!currentPlaylist.size) return;

  const token = getState().app.get('token');
  dispatch(setIsLoading(true));

  const previousSong = getState().player.get('currentSong');
  const nextSong = currentPlaylist.last();
  const newPlaylist = currentPlaylist.pop().unshift(previousSong);

  dispatch(setPlaylist(newPlaylist));

  apiFetchStreamableSong(token, nextSong.get('path'))
    .then(({ data }) => {
      dispatch(setCurrentSong(Map(data)));
    })
    .catch((err) => {
      logError(err);
    })
    .finally(() => {
      dispatch(setIsLoading(false));
    });
};
