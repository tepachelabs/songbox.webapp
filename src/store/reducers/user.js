import { Map } from 'immutable';
import { USER_SET_USER } from '../constants';

const initialState = Map({
  name: 'Anonymous Name',
  email: 'anonymous@gmail.com',
  photo: '',
});

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case USER_SET_USER:
    return state
      .set('name', payload.name)
      .set('email', payload.email)
      .set('photo', payload.photo);

  default:
    return state;
  }
};

export default userReducer;
