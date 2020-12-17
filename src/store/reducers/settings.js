import { Map } from 'immutable';

import {
  SET_AUTO_PLAY, SET_FULL_FILENAME, SET_DARK_THEME, RESTORE_PREFERENCES,
} from '../constants';

const initialState = Map({
  autoPlay: true,
  darkTheme: false,
  fullFilename: false,
});

const settingsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case SET_AUTO_PLAY:
    return state.set('autoPlay', payload);
  case SET_FULL_FILENAME:
    return state.set('fullFilename', payload);
  case SET_DARK_THEME:
    return state.set('darkTheme', payload);

  case RESTORE_PREFERENCES:
    return state
      .set('autoPlay', true)
      .set('darkTheme', false)
      .set('fullFilename', false);

  default:
    return state;
  }
};

export default settingsReducer;
