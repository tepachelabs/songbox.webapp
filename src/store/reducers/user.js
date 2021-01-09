import { Map } from 'immutable';
import { USER_SET_USER } from '../constants';

const userReducer = (state = Map(), { type, payload = {} }) => {
  switch (type) {
  case USER_SET_USER:
    return payload;

  default:
    return state;
  }
};

export default userReducer;
