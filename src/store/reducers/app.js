import { Map } from 'immutable';

import {
  APP_LOADED,
  APP_LOADING,
  APP_TOKEN_UPDATE,
  SET_OS,
  APP_SET_IS_VALID_SESSION,
} from '../constants';

const initialState = Map({
  isLoaded: false,
  token: null,
  os: null, // android | iOS | base
  isValidSession: false,
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case APP_LOADING:
      return state.set('isLoaded', false);
    case APP_LOADED:
      return state.set('isLoaded', true);
    case APP_TOKEN_UPDATE:
      return state.set('token', payload);
    case SET_OS:
      return state.set('os', payload);
    case APP_SET_IS_VALID_SESSION:
      return state.set('isValidSession', payload);
    default:
      return state;
  }
};
