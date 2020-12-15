import {
  SET_FULL_FILENAME, SET_DARK_THEME, SET_AUTO_PLAY, RESTORE_PREFERENCES,
} from '../settingsConstants';

export const setAutoPlay = (payload) => ({ type: SET_AUTO_PLAY, payload });
export const setFullFilename = (payload) => ({ type: SET_FULL_FILENAME, payload });
export const setDarkTheme = (payload) => ({ type: SET_DARK_THEME, payload });
export const restorePreferences = () => ({ type: RESTORE_PREFERENCES });
