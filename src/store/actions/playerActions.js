import { apiFetchFile } from '../../lib/apiFileService';
import {
  SET_SONG_LINK, CHANGE_SONG_INDEX, SET_ON_REPEAT, SET_CURRENT_SONG, SET_VOLUME,
} from '../playerConstants';

export const setSongLink = (payload) => ({ type: SET_SONG_LINK, payload });
export const changeSongIndex = (payload) => ({ type: CHANGE_SONG_INDEX, payload });
export const setOnRepeat = (payload) => ({ type: SET_ON_REPEAT, payload });
export const setCurrentSong = (payload) => ({ type: SET_CURRENT_SONG, payload });
export const setVolume = (payload) => ({ type: SET_VOLUME, payload });

export const fetchSongLinkFromPath = (path) => (dispatch, getState) => {
  const token = getState().app.get('token');

  apiFetchFile(token, path)
    .then(({ data }) => {
      const downloadableLink = data.url.replace('?dl=0', '?dl=1');
      dispatch(setSongLink(downloadableLink));
    })
    .catch((err) => {
      console.error(err);
    });
};
