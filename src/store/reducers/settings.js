import {
  SET_AUTO_PLAY, SET_FULL_FILENAME, SET_DARK_THEME, RESTORE_PREFERENCES,
} from '../constants/settings';

const initialState = {
  autoPlay: true,
  darkTheme: false,
  fullFilename: false,
};

const settingsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case SET_AUTO_PLAY:
    return { ...state, autoPlay: payload };
  case SET_FULL_FILENAME:
    return { ...state, fullFilename: payload };
  case SET_DARK_THEME:
    return { ...state, darkTheme: payload };
  case RESTORE_PREFERENCES:
    return {
      autoPlay: true,
      darkTheme: false,
      fullFilename: false,
    };
  default:
    return state;
  }
};

export default settingsReducer;
