import {
  RESTORE_PREFERENCES,
  SET_AUTO_PLAY,
  SET_DARK_THEME,
  SET_FULL_FILENAME,
} from '../settingsConstants';

const initialState = {
  autoPlay: true,
  darkTheme: false,
  fullFilename: false,
};

const settingsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case SET_AUTO_PLAY:
    return { ...state, autoPlay: !state.autoPlay };

  case SET_DARK_THEME:
    return { ...state, darkTheme: !state.darkTheme };

  case SET_FULL_FILENAME:
    return { ...state, fullFilename: payload };

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
