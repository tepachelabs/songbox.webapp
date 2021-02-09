import {
  APP_LOADED,
  APP_LOADING,
  APP_TOKEN_UPDATE,
  SET_OS,
  APP_SET_IS_VALID_SESSION,
} from '../constants';

/* SYNC OPERATIONS */

export const setAppIsLoading = () => ({ type: APP_LOADING });
export const setAppLoaded = () => ({ type: APP_LOADED });
export const updateAppToken = (payload) => ({ type: APP_TOKEN_UPDATE, payload });
export const setOS = (payload) => ({ type: SET_OS, payload });
export const setValidSession = (payload) => ({ type: APP_SET_IS_VALID_SESSION, payload });

/* ASYNC OPERATIONS */
