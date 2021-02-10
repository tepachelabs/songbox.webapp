import { SIDEBAR_CHANGE_INDEX, USER_SET_USER } from '../constants';

/* SYNC OPERATIONS */

export const changeSidebarIndex = (payload) => ({
  type: SIDEBAR_CHANGE_INDEX,
  payload,
});
export const setUser = (payload) => ({ type: USER_SET_USER, payload });

/* ASYNC OPERATIONS */
