import {
  SETTINGS_SET_AUTO_PLAY,
  SETTINGS_SET_FULL_FILENAME,
  SETTINGS_SET_DARK_THEME,
  SETTINGS_RESTORE_PREFERENCES,
  SETTINGS_SET_LANG,
} from '../constants';

export const setAutoPlay = (payload) => ({
  type: SETTINGS_SET_AUTO_PLAY,
  payload,
});
export const setFullFilename = (payload) => ({
  type: SETTINGS_SET_FULL_FILENAME,
  payload,
});
export const setDarkTheme = (payload) => ({
  type: SETTINGS_SET_DARK_THEME,
  payload,
});
export const restorePreferences = () => ({
  type: SETTINGS_RESTORE_PREFERENCES,
});

export const setLang = (payload) => ({
  type: SETTINGS_SET_LANG,
  payload,
});
