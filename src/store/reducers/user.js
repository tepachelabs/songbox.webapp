import { USER_SET_USER } from '../constants';

const userReducer = (state = {}, { type, payload = {} }) => {
  switch (type) {
  case USER_SET_USER:
    return payload;

  default:
    return state;
  }
};

export default userReducer;
