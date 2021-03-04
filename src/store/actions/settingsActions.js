import {
  SETTINGS_SET_APP_LANGUAGE,
  SETTINGS_SET_IS_AUTO_PLAY,
  SETTINGS_SET_IS_DARK_THEME,
  SETTINGS_SET_IS_FULL_FILENAME,
  SETTINGS_RESTORE_PREFERENCES,
} from '../constants';

/* SYNC OPERATIONS */

export const setAutoPlay = (payload) => ({
  type: SETTINGS_SET_IS_AUTO_PLAY,
  payload,
});

export const setDarkTheme = (payload) => ({
  type: SETTINGS_SET_IS_DARK_THEME,
  payload,
});

export const setFullFilename = (payload) => ({
  type: SETTINGS_SET_IS_FULL_FILENAME,
  payload,
});

export const setLang = (payload) => ({
  type: SETTINGS_SET_APP_LANGUAGE,
  payload,
});

export const restorePreferences = () => ({
  type: SETTINGS_RESTORE_PREFERENCES,
});

/* ASYNC OPERATIONS */
