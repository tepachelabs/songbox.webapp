import {
  SET_AUTO_PLAY, SET_FULL_FILENAME, SET_DARK_THEME, RESTORE_PREFERENCES,
} from '../constants/settings';

export const setAutoPlay = (payload) => ({ type: SET_AUTO_PLAY, payload });
export const setFullFilename = (payload) => ({ type: SET_FULL_FILENAME, payload });
export const setDarkTheme = (payload) => ({ type: SET_DARK_THEME, payload });
export const restorePreferences = () => ({ type: RESTORE_PREFERENCES });
