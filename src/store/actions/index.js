import { CHANGE_SIDEBAR_INDEX, SET_USER } from '../constants';

export const changeSidebarIndex = (payload) => ({ type: CHANGE_SIDEBAR_INDEX, payload });
export const setUser = (payload) => ({ type: SET_USER, payload });
