import { Map } from 'immutable';
import { USER_SET_USER } from '../constants';

const initialState = Map({
  avatar: '',
  email: '',
  name: '',
});

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_SET_USER:
      return state
        .set('avatar', payload.avatar)
        .set('email', payload.email)
        .set('name', payload.name);
    default:
      return state;
  }
};

export default userReducer;
