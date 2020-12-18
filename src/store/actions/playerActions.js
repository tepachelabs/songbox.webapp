import {
  PLAYER_SET_REPEAT,
  PLAYER_SET_VOLUME,
  PLAYER_SET_SONG_LINK,
  PLAYER_SET_CURRENT_SONG,
} from '../constants';

import { apiFetchStreamableSongs } from '../../lib/apiFetchStreamableSong';

export const toggleRepeat = (payload) => ({ type: PLAYER_SET_REPEAT, payload });
export const setVolume = (payload) => ({ type: PLAYER_SET_VOLUME, payload });
export const setSong = (payload) => ({ type: PLAYER_SET_CURRENT_SONG, payload });
export const setSongLink = (payload) => ({ type: PLAYER_SET_SONG_LINK, payload });

export const fetchStreamableSong = (path) => (dispatch, getState) => {
  const token = getState().app.get('token');

  apiFetchStreamableSongs(token, path)
    .then(({ data }) => {
      const streamableSong = data.url.replace('?dl=0', '?dl=1');
      dispatch(setSongLink(streamableSong));
    })
    .catch((err) => {
      throw new Error(err);
    });
};
