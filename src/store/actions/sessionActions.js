import { apiMeRequest } from 'lib/apiUserService';
import { getSession, saveSession } from 'lib/localStorage';
import { setUser } from './index';
import { setAppLoaded, updateAppToken, setValidSession } from './appActions';

/* SYNC OPERATIONS */

/* ASYNC OPERATIONS */
export const createNewSession = (token) => (dispatch) => {
  apiMeRequest(token)
    .then(({ data: user }) => {
      dispatch(setUser(user));
      dispatch(updateAppToken(token));
      saveSession(token, user); // rename this saveSessionToLocalStorage
      dispatch(setAppLoaded());
      dispatch(setValidSession(true));
    })
    .catch((err) => {
      dispatch(setValidSession(false));
      throw new Error(err);
    });
};

export const recoverSession = () => (dispatch) => {
  const recoveredUser = getSession();

  if (recoveredUser) {
    dispatch(setUser(recoveredUser.user));
    dispatch(updateAppToken(recoveredUser.token));
    dispatch(createNewSession(recoveredUser.token));
  }

  dispatch(setAppLoaded());
};
